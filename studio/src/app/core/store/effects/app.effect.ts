import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoadService } from "../../services/load.service";
import { AppInit, AppInitError, AppInitSuccess } from "../actions/app.action";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class AppEffect {
    constructor(private actions$ : Actions, private loadService: LoadService){}

    load$ = createEffect(() => this.actions$.pipe(
        ofType(AppInit), 
        switchMap(() => this.loadService.load()
        .pipe(
            map(response => AppInitSuccess({
                response: response
            }))
            catchError((errorResponse: HttpErrorResponse) => of(AppInitError({
                error:{
                    error:errorResponse.error,
                    status: errorResponse.status
                }
            })))
        ))
    ))
}