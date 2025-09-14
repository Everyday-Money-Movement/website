"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, Search } from "lucide-react";

interface Country {
  code: string;
  name: string;
}

interface LivePageClientProps {
  countries: Country[];
}

export function LivePageClient({ countries }: LivePageClientProps) {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredCountries = useMemo(() => {
    if (!searchValue) return countries;
    return countries.filter(country => 
      country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      country.code.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [countries, searchValue]);

  const handleCountrySelect = (countryCode: string) => {
    router.push(`/live/${countryCode.toLowerCase()}`);
    setSearchOpen(false);
    setSearchValue("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
      <Button 
        onClick={() => router.push('/live/us')} 
        className="w-full sm:w-64"
      >
        General Guide
      </Button>
      
      {/* Search Component */}
      <Popover open={searchOpen} onOpenChange={setSearchOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={searchOpen}
            className="w-full sm:w-64 justify-between"
          >
            <Search className="mr-2 h-4 w-4" />
            {searchValue ? searchValue : "Search countries..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput 
              placeholder="Search countries..." 
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              <CommandEmpty>No countries found.</CommandEmpty>
              <CommandGroup>
                {filteredCountries.map((country) => (
                  <CommandItem
                    key={country.code}
                    value={country.name}
                    onSelect={() => handleCountrySelect(country.code)}
                  >
                    {country.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
