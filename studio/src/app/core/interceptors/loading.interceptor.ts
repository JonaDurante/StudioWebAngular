import { HttpInterceptorFn } from '@angular/common/http';
import { LoadService } from '../services/load/load.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { SKIP_LOADING } from '../tokens/skip-loading.token';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  if(req.context.get(SKIP_LOADING)){
    return next(req);
  }

  const loadingService = inject(LoadService);

  loadingService.loadingOn();

  return next(req).pipe(
    finalize(() => {
      loadingService.loadingOff();
    })
  );
}
