/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from './CustomMap';

window.onload = () => {
    console.log('Google Maps API loaded:', !!google.maps);

    const user = new User();
    const company = new Company();
    const customMap = new CustomMap('map');

    customMap.addMarker(user);
    customMap.addMarker(company);

    console.log(user);
    console.log(company);
};
