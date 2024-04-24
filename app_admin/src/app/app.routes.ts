import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent},
    { path: 'edit-trip', component: EditTripComponent},
    { path: 'delete-trip', component: DeleteTripComponent},
    { path: 'list-trips', component: TripListingComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, pathMatch: 'full'}
];
