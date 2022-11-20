export class Reservation {
  constructor(
    public name = '',
    public email = '',
    public date = {
      month: '',
      day: '',
      year: '',
    },
    public time = {
      hour: '',
      minute: '',
      meridian: '',
    },
    public guests = ''
  ) { }
}
