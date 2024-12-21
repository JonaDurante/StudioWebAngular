import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfirmedEmailService } from './service/confirmed-email.service';
import { Subject, takeUntil } from 'rxjs';
import { UserToken } from '../../core/models/user-token';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmed-email',
  standalone: true,
  imports: [],
  templateUrl: './confirmed-email.component.html',
  styleUrl: './confirmed-email.component.scss',
})
export class ConfirmedEmailComponent implements OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject();
  private userToken!: UserToken;
  protected confirmationTokenString: string = '';

  constructor(
    private confirmedEmailService: ConfirmedEmailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.confirmationTokenString = params['confirmationTokenString'] || '';

      if (this.confirmationTokenString) {
        this.confirmedEmailService
          .confirmEmail(this.confirmationTokenString)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((res) => {
            if (res) {
              this.userToken = res;
            }
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
