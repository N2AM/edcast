import {environment} from "../environments/environment";

export const LOCAL_REST_URL = 'http://localhost:3000';
export const PROD_REST_URL = `//${window.location.host}/edcast`;

export const APP_URL = `//${window.location.host}/edcast`;

export const REST_URL = environment.production ? PROD_REST_URL : LOCAL_REST_URL;
