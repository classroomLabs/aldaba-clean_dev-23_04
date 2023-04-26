// ❌

export class Bookings {
  booking: any;
  utils: BookingsUtils = new BookingsUtils();
  create(activity: any, client: any, places: number) {
    this.utils.doThings();
    this.utils.doOtherThings();
    this.save(this.booking);
  }
  save(booking: any) {
    this.utils.doThings();
  }
  // private doThings() {}
  // private doOtherThings() {}
}

class BookingsUtils {
  doThings() {}
  doOtherThings() {}
}

// ✅

export class BookingsService {
  booking: any;
  create(activity: any, client: any, places: number) {}
}

export class BookingsRepository {
  save(booking: any) {}
}
