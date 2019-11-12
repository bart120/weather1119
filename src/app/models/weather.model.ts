
export interface Weather {
    weather: {
        main: string;
        icon: string;
    };
    main: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    name: string;
}
