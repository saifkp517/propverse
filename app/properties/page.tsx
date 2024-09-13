"use client";

import { useState } from "react";
import {
  MapPin,
  Search,
  SlidersHorizontal,
  ListFilter,
} from "lucide-react";
import {
  Input,
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  BreadcrumbItem,
  Breadcrumbs,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter } from "@/components/ui/sheet"; // Import Sheet components from Shadcn UI
import CommercialPropertyCard from "@/app/components/cards/commercialCard";
import HolidayPropertyCard from "@/app/components/cards/holidayCard";

export default function Properties() {
  const [sortOption, setSortOption] = useState("relevance");
  const [activeTab, setActiveTab] = useState("Commercial");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    investmentAmount: "",
    irr: "",
  });

    // Data for Commercial and Holiday Properties
    const commercialProperties = [
      {
        imageUrl:
          "https://empireworld.com/storage/project/images/0Nh1fqj83RHz2qzSPYrDl1WxNp5Shdh9kyJT8gSL.jpeg",
        investmentAmount: "₹80 Lakhs",
        propertyName: "Empire Business Tower",
        location: "Mumbai, Maharashtra",
        riskLevel: "Low Risk",
        irrValue: 9,
        fundedPercentage: 85,
        status: "Live Now",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1551128997-c2b66772f982?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        investmentAmount: "₹75 Lakhs",
        propertyName: "Tech Hub Plaza",
        location: "Delhi, NCR",
        riskLevel: "Medium Risk",
        irrValue: 12,
        fundedPercentage: 65,
        status: "Coming Soon",
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        investmentAmount: "₹90 Lakhs",
        propertyName: "Corporate Heights",
        location: "Hyderabad, Telangana",
        riskLevel: "High Risk",
        irrValue: 15,
        fundedPercentage: 40,
        status: "Live Now",
      },
      {
        imageUrl: "https://i.ytimg.com/vi/_Xs007j4l34/maxresdefault.jpg",
        investmentAmount: "₹95 Lakhs",
        propertyName: "Trade Center One",
        location: "Kolkata, West Bengal",
        riskLevel: "Medium Risk",
        irrValue: 11,
        fundedPercentage: 70,
        status: "Live Now",
      },
    ];
  
    const holidayProperties = [
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        investmentAmount: "₹35 Lakhs",
        propertyName: "Beachfront Villas",
        location: "Goa",
        riskLevel: "Low Risk",
        irrValue: 8,
        fundedPercentage: 80,
        status: "Live Now",
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675187975486-e659bff91a9f?q=80&w=2102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        investmentAmount: "₹50 Lakhs",
        propertyName: "Hilltop Retreat",
        location: "Shimla, Himachal Pradesh",
        riskLevel: "Medium Risk",
        irrValue: 10,
        fundedPercentage: 55,
        status: "Coming Soon",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        investmentAmount: "₹60 Lakhs",
        propertyName: "Lakeview Villas",
        location: "Udaipur, Rajasthan",
        riskLevel: "High Risk",
        irrValue: 14,
        fundedPercentage: 45,
        status: "Live Now",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
        investmentAmount: "₹55 Lakhs",
        propertyName: "Desert Sands Resort",
        location: "Jaisalmer, Rajasthan",
        riskLevel: "Medium Risk",
        irrValue: 12,
        fundedPercentage: 60,
        status: "Live Now",
      },
    ];
  
  
  const properties =
    activeTab === "Commercial" ? commercialProperties : holidayProperties;

  // Sorting Function
  const sortedProperties = [...properties].sort((a, b) => {
    if (sortOption === "investmentAmountLowToHigh") {
      const parseAmount = (amount) =>
        parseInt(amount.replace("₹", "").replace(" Lakhs", ""));
      return parseAmount(a.investmentAmount) - parseAmount(b.investmentAmount);
    } else if (sortOption === "investmentAmountHighToLow") {
      const parseAmount = (amount) =>
        parseInt(amount.replace("₹", "").replace(" Lakhs", ""));
      return parseAmount(b.investmentAmount) - parseAmount(a.investmentAmount);
    } else if (sortOption === "irr" || sortOption === "rentalYield") {
      return b.irrValue - a.irrValue; // Handle IRR and Rental Yield
    } else if (sortOption === "riskLevel") {
      const riskLevels = {
        "Low Risk": 1,
        "Medium Risk": 2,
        "High Risk": 3,
      };
      return riskLevels[a.riskLevel] - riskLevels[b.riskLevel];
    } else {
      return 0; // Default relevance or original order
    }
  });

  const applyFilters = (property) => {
    return (
      (!filters.location ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (!filters.investmentAmount ||
        parseInt(property.investmentAmount.replace("₹", "").replace(" Lakhs", "")) >=
        parseInt(filters.investmentAmount)) &&
      (!filters.irr || property.irrValue >= parseInt(filters.irr))
    );
  };

  const filteredProperties = sortedProperties
    .filter(applyFilters)
    .filter(
      (property) =>
        property.propertyName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortOptions =
    activeTab === "Commercial"
      ? ["relevance", "investmentAmountLowToHigh", "investmentAmountHighToLow", "irr", "riskLevel"]
      : ["relevance", "perShareCostLowToHigh", "perShareCostHighToLow", "rentalYield", "riskLevel"];

  return (
    <div className="container mx-auto my-12 px-4">
      {/* Breadcrumbs and title */}
      <div className="flex flex-col">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/properties" className="font-semibold">
            Properties
          </BreadcrumbItem>
        </Breadcrumbs>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          Discover Your Next Property Investment
        </h1>
      </div>

      {/* Tabs for Commercial and Holiday properties */}
      <div className="flex flex-col mt-4">
        <Tabs
          key="tabs"
          color="primary"
          variant="solid"
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key)}
          aria-label="Property Categories"
        >
          <Tab key="Commercial" title="Commercial" />
          <Tab key="Holiday" title="Holiday" />
        </Tabs>
      </div>

      {/* Search and Filter Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Input
          isClearable
          variant="bordered"
          placeholder="Search for properties"
          startContent={<Search size={14} className="mr-2" />}
          className="flex-1 min-w-[200px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              startContent={<SlidersHorizontal size={16} />}
              size="md"
              variant="faded"
              className="flex items-center gap-2"
              onClick={() => setIsSheetOpen(true)}
            >
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent className="xl:w-[700px] xl:max-w-none sm:w-[400px] sm:max-w-[540px]">
            <SheetHeader>
              <h3 className="text-xl font-semibold">Filter Options</h3>
            </SheetHeader>
            <div className="p-4">
              <div className="mt-4">
                <Input
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                  className="mb-4"
                  aria-label="Location filter"
                />
                <Input
                  placeholder={
                    activeTab === "Commercial"
                      ? "Investment Amount (Min)"
                      : "Per Share Cost (Min)"
                  }
                  value={filters.investmentAmount}
                  onChange={(e) =>
                    setFilters({ ...filters, investmentAmount: e.target.value })
                  }
                  className="mb-4"
                  aria-label={
                    activeTab === "Commercial"
                      ? "Investment Amount filter"
                      : "Per Share Cost filter"
                  }
                />
                <Input
                  placeholder={activeTab === "Commercial" ? "IRR (Min)" : "Rental Yield (Min)"}
                  value={filters.irr}
                  onChange={(e) => setFilters({ ...filters, irr: e.target.value })}
                  className="mb-4"
                  aria-label={
                    activeTab === "Commercial"
                      ? "IRR filter"
                      : "Rental Yield filter"
                  }
                />
              </div>
            </div>
            <SheetFooter>
              <Button
                className="w-full"
                onClick={() => setIsSheetOpen(false)}
                aria-label="Apply Filters"
              >
                Apply Filters
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              startContent={<ListFilter size={16} />}
              size="md"
              variant="faded"
              className="flex items-center gap-2"
              aria-label="Sort by"
            >
              Sort by
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Sort By"
            onAction={(key: string) => setSortOption(key)}
          >
            {sortOptions.map((option) => (
              <DropdownItem key={option} aria-label={option}>
                {option
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-6">
        {filteredProperties.map((property, index) =>
          activeTab === "Commercial" ? (
            <CommercialPropertyCard key={index} {...property} />
          ) : (
            <HolidayPropertyCard key={index} {...property} />
          )
        )}
      </div>
    </div>
  );
}
