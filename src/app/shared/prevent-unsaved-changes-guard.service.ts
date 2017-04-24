import { CanDeactivate } from '@angular/router';

export interface IFormsComponent {
    hasUnsavedChanges(): Boolean;
}

export class PreventUnsavedChangesGuard implements CanDeactivate<IFormsComponent> {
    canDeactivate(component: IFormsComponent) {
        if (component.hasUnsavedChanges())
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");

        return true;
    }
}