type Day =
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";

type Month =
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";

export type TimeInWeeks = "1" | "2" | "3" | "4" | "6" | "8" | "10" | "12";

interface DayName {
    [key: string]: Day;
}

interface MonthName {
    [key: string]: Month;
}

export interface DailyRoute {
    diet: string | '';
    gym: boolean;
    running: boolean;
}

export interface WeeklyDayRoute extends DailyRoute {
    dayNameId?: number;
}

export interface AllDayRoute extends WeeklyDayRoute {
    monthDayId?: number;
}

export interface WeeklyRouteEntity {
    [key: string]: WeeklyDayRoute;
}

export interface AllDayRouteEntity {
    [key: string]: AllDayRoute;
}

export interface TreningDetails {
    timeInWeeks: TimeInWeeks | null;
    startAt: string;
    endsAt: string;
    dayNames: DayName;
    monthNames: MonthName;
    day: DailyRoute;
    week: WeeklyRouteEntity;
    allDays: AllDayRouteEntity | {};
}

const dayNames: DayName = {
    0: "monday",
    1: "tuesday",
    2: "wednesday",
    3: "thursday",
    4: "friday",
    5: "saturday",
    6: "sunday",
};

const monthNames: MonthName = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
};

export const treningDetails: TreningDetails = {
    timeInWeeks: null,
    startAt: "",
    endsAt: "",
    dayNames,
    monthNames,
    day: {
        diet: '1234',
        gym: true,
        running: false,
    },
    week: {
        0: {
            dayNameId: 0,
            diet: '',
            gym: false,
            running: false,
        },
        1: {
            dayNameId: 1,
            diet: '',
            gym: false,
            running: true,
        },
        2: {
            dayNameId: 2,
            diet: '',
            gym: false,
            running: false,
        },
        3: {
            dayNameId: 3,
            diet: '',
            gym: true,
            running: false,
        },
        4: {
            dayNameId: 4,
            diet: '',
            gym: false,
            running: false,
        },
        5: {
            dayNameId: 5,
            diet: '',
            gym: false,
            running: false,
        },
        6: {
            dayNameId: 6,
            diet: '',
            gym: false,
            running: false,
        },
    },
    allDays: {
        0: {
            dayNameId: 3,
            monthDayId: 23,
            diet: '',
            gym: false,
            running: false,
        },
        1: {
            dayNameId: 4,
            monthDayId: 24,
            diet: '',
            gym: false,
            running: false,
        },
    },
};
