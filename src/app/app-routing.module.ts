import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "registration",
    loadChildren: () =>
      import("./registration/registration.module").then(
        m => m.RegistrationModule
      )
  },
  {
    path: "finance",
    loadChildren: () =>
      import("./finance/finance.module").then(m => m.FinanceModule)
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
