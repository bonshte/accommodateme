import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import { useCombobox } from "downshift";
  import "../styles/places.css"
  //import "downshift/dist/downshift.css";
  type PlacesProps = {
    setPin: (position: google.maps.LatLngLiteral) => void;
  };
  export default function Places({ setPin }: PlacesProps) {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (val: string) => {
      setValue(val, false);
      clearSuggestions();
      const results = await getGeocode({ address: val });
      const { lat, lng } = await getLatLng(results[0]);
      setPin({ lat, lng });
    };

    const {
      isOpen,
      getMenuProps,
      getInputProps,
      getItemProps,
      highlightedIndex,
    } = useCombobox({
      items: data.map((item) => item.description),
      onInputValueChange: ({ inputValue }) => setValue(inputValue || ""),
      onSelectedItemChange: ({ selectedItem }) => {
        if (selectedItem) {
          handleSelect(selectedItem);
        }
      },
    });
    return (
      <div className="combobox-container">
        <input
          {...getInputProps()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className="combobox-input"
          placeholder="Search "
        />
        <ul {...getMenuProps()} className="combobox-options">
          {isOpen &&
            status === "OK" &&
            data.map((item, index) => (
              <li
                {...getItemProps({ item: item.description, index })}
                key={item.place_id}
                className={
                  highlightedIndex === index ? "option highlighted" : "option"
                }
              >
                {item.description}
              </li>
            ))}
        </ul>
      </div>
    );
  }
