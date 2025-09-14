"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MapPin, Github } from "lucide-react";
import { ISO2_TO_NAME } from "@/lib/iso";
import { usePathname } from "next/navigation";

export function CountryNotFoundContent() {
  const pathname = usePathname();
  
  // Get the country name from the URL path
  let countryName = "this country";
  
  try {
    // Extract country from path like /live/france or /live/jp
    const pathParts = pathname.split("/");
    const countryParam = pathParts[pathParts.length - 1];
    
    if (countryParam && countryParam !== "live") {
      // If it's an ISO code, get the full name
      if (countryParam.length === 2) {
        countryName = ISO2_TO_NAME[countryParam.toUpperCase()] || countryParam;
      } else {
        // If it's a URL-friendly name, convert it back
        countryName = countryParam
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
    }
  } catch {
    // If there's any error, use default
    countryName = "this country";
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <MapPin className="h-8 w-8 text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl">Guide for {countryName} Not Found</CardTitle>
            <CardDescription className="text-lg">
              We don't have a Bitcoin guide for {countryName} yet, but we'd love to add one!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Our community is constantly working to add more countries to help people live on Bitcoin around the world. 
              If you have knowledge about Bitcoin adoption in {countryName}, we'd appreciate your contribution.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">How to Add a New Country Guide:</h3>
              <ol className="text-left text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <span>Fork our repository on GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <span>Follow our template in <code className="bg-muted px-1 rounded">src/lib/countries/template.ts</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <span>Add your country data and submit a pull request</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="https://github.com/Everyday-Money-Movement/website" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/live">
                  Back to World Map
                </Link>
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Need help? Check out our{" "}
                <Link 
                  href="https://github.com/Everyday-Money-Movement/website/blob/main/src/lib/countries/README.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  detailed documentation
                </Link>{" "}
                for adding new countries.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

