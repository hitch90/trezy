import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

import { IdentityService } from '../_services';

@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
    constructor(
        private templateRef: TemplateRef<any>,
        private identityService: IdentityService,
        private viewContainer: ViewContainerRef
    ) {}

    condition: boolean;
    isCreated = false;

    ngOnInit() {
        this.identityService.isAuthenticated.subscribe(
            (isAuthenticated) => {
                if (isAuthenticated && this.condition && !this.isCreated ||
                    !isAuthenticated && !this.condition && !this.isCreated) {
                    this.isCreated = true;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else if (isAuthenticated && !this.condition || !isAuthenticated && this.condition) {
                    this.viewContainer.clear();
                    this.isCreated = false;
                }
            }
        );
    }

    @Input() set appShowAuthed(condition: boolean) {
        this.condition = condition;
    }

}
