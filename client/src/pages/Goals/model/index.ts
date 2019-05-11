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
    diet: string | "";
    gym: boolean;
    running: boolean;
}

export interface WeeklyDayRoute extends DailyRoute {
    dayNameId?: number;
}

export interface AllDayRoute extends WeeklyDayRoute {
    id?: number;
    dayOfMonth?: number;
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
        diet: "1234",
        gym: true,
        running: false,
    },
    week: {
        0: {
            dayNameId: 0,
            diet: "",
            gym: false,
            running: false,
        },
        1: {
            dayNameId: 1,
            diet: "",
            gym: false,
            running: true,
        },
        2: {
            dayNameId: 2,
            diet: "",
            gym: false,
            running: false,
        },
        3: {
            dayNameId: 3,
            diet: "",
            gym: true,
            running: false,
        },
        4: {
            dayNameId: 4,
            diet: "",
            gym: false,
            running: false,
        },
        5: {
            dayNameId: 5,
            diet: "",
            gym: false,
            running: false,
        },
        6: {
            dayNameId: 6,
            diet: "",
            gym: false,
            running: false,
        },
    },
    allDays: {
        0: {
            id: 0,
            dayNameId: 3,
            dayOfMonth: 23,
            diet: "",
            gym: false,
            running: false,
        },
        1: {
            id: 1,
            dayNameId: 4,
            dayOfMonth: 24,
            diet: "",
            gym: false,
            running: false,
        },
        2: {
            id: 2,
            dayNameId: 5,
            dayOfMonth: 25,
            diet: "",
            gym: false,
            running: false,
        },
        3: {
            id: 3,
            dayNameId: 6,
            dayOfMonth: 26,
            diet: "",
            gym: false,
            running: false,
        },
        4: {
            id: 4,
            dayNameId: 0,
            dayOfMonth: 27,
            diet: "2000",
            gym: false,
            running: false,
        },
        5: {
            id: 5,
            dayNameId: 1,
            dayOfMonth: 28,
            diet: "",
            gym: false,
            running: false,
        },
        6: {
            id: 6,
            dayNameId: 2,
            dayOfMonth: 29,
            diet: "",
            gym: false,
            running: false,
        },
        7: {
            id: 7,
            dayNameId: 3,
            dayOfMonth: 30,
            diet: "",
            gym: false,
            running: false,
        },
        8: {
            id: 8,
            dayNameId: 4,
            dayOfMonth: 1,
            diet: "",
            gym: false,
            running: false,
        },
        9: {
            id: 9,
            dayNameId: 5,
            dayOfMonth: 2,
            diet: "",
            gym: false,
            running: false,
        },
        10: {
            id: 10,
            dayNameId: 6,
            dayOfMonth: 3,
            diet: "",
            gym: false,
            running: false,
        },
        11: {
            id: 11,
            dayNameId: 0,
            dayOfMonth: 4,
            diet: "5444",
            gym: false,
            running: false,
        },
        12: {
            id: 12,
            dayNameId: 1,
            dayOfMonth: 5,
            diet: "",
            gym: true,
            running: false,
        },
        13: {
            id: 13,
            dayNameId: 2,
            dayOfMonth: 6,
            diet: "",
            gym: false,
            running: false,
        },
        14: {
            id: 14,
            dayNameId: 3,
            dayOfMonth: 7,
            diet: "",
            gym: false,
            running: true,
        },
        15: {
            id: 15,
            dayNameId: 4,
            dayOfMonth: 8,
            diet: "1000",
            gym: false,
            running: false,
        },
    },
};
