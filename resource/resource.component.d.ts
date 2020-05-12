import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioAuthService } from '../auth/auth.service';
import { FormioResourceService } from './resource.service';
export declare class FormioResourceComponent implements OnInit {
    service: FormioResourceService;
    route: ActivatedRoute;
    auth: FormioAuthService;
    changeDetectorRef: ChangeDetectorRef;
    perms: {
        delete: boolean;
        edit: boolean;
    };
    constructor(service: FormioResourceService, route: ActivatedRoute, auth: FormioAuthService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
}
