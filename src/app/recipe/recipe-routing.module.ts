import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { RecipeResolverService } from "../shared/recipe-resolver.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeComponent } from "./recipe.component";

const routes : Routes = [
    { 
    path : '',  
    canActivate : [AuthGuardService],          //array of guards that we want to apply to before accessing the link
    component : RecipeComponent, 
    children : [
      { path : '', component : RecipeStartComponent },
      { path : 'new', component : RecipeEditComponent},
      { 
      path : ':id', component : RecipeDetailComponent,
      resolve : [RecipeResolverService]
      },
      { 
        path : ':id/edit', 
        component : RecipeEditComponent,
        resolve : [RecipeResolverService]
      }
    ] 
  },
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule{

}