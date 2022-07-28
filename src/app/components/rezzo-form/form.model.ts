export interface Reservation {
    name: string;
    email: string;
    date: {
        month: string;
        day: string;
        year: number;
    }
    time: {
        hour: string;
        minute: string;
        meridian: string;
    }
    guests?: string;
}


export const Months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
export const Days: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
export const Years: number[] = [2022, 2023, 2024];
export const Hours: string[] = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',];
export const Minutes: any[] = [ '00', '05','10','15','20','25','30','35','40','45','50','55'];
export const Guests: any[] = ['1 person','2 people','3 people', '4 people','5 people','6 people','7 people','8 people','9 people','10 people'];