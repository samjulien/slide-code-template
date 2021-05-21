handleRedirectSuccess$ = createEffect(
  () =>
    this.actions$.pipe(
      ofType(AuthActions.handleRedirectSucess),
      tap(({ redirectUrl }) => this.router.navigate([redirectUrl]))
    ),
  { dispatch: false }
);

// Set the user & token somewhere??
// Navigate to the redirectUrl??