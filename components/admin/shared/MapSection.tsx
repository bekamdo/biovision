mapsection.tsx import { ListIcon, MapIcon } from "lucide-react";

// import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { CardMap } from "../cards/CardMap";
import CardContentMap from "../cards/CardContentMap";

export const MapSection = () => {
  // View options data for the toggle group
  const viewOptions = [
    {
      value: "list",
      icon: <ListIcon className="h-4 w-4" />,
      label: "List View",
      selected: false,
    },
    {
      value: "map",
      icon: <MapIcon className="h-4 w-4" />,
      label: "Map View",
      selected: true,
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[766px] items-start gap-4">
      <CardMap className="w-full border-none shadow-none bg-transparent">
        <CardContentMap className="flex items-start px-4 py-2.5">
          <ToggleGroup
            type="single"
            defaultValue="map"
            className="flex gap-2.5"
          >
            {viewOptions.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className={`flex h-[34px] items-center gap-[3px] pl-2.5 pr-3 py-0.5 rounded border border-solid border-[#0000000f] ${
                  option.selected
                    ? "bg-[#2e7d32] text-basewhite"
                    : "bg-basebg-1 text-black"
                }`}
                aria-label={option.label}
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  {option.icon}
                </div>
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-xs">
                  {option.label}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </CardContentMap>
      </CardMap>

      <div className="relative w-full h-[445px] overflow-hidden rounded">
        <img
          className="w-full h-full object-cover"
          alt="Map of Kenya and surrounding areas"
          src="https://c.animaapp.com/mdiuwcd8mdYHVo/img/basemap-image.png"
        />
      </div>
    </section>
  );
};
