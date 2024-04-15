'use client'



import Papelaria from "@/app/papelaria/page";
import {  Autocomplete, 
     AutocompleteSection, 
      AutocompleteItem} from "@nextui-org/react";
import React from "react";
     
   
      
      export default function DropDownActions() {
        return (
          <Autocomplete
            defaultItems={Papelaria.name}
            label="Papelaria"
            placeholder="Busque um produto"
            className="max-w-xs"
          >
            {(papelaria) => <AutocompleteItem key={papelaria}>{papelaria}</AutocompleteItem>}
          </Autocomplete>
        );
      }
      