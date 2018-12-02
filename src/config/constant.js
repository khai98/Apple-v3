export const BLOCK_CHECBOX = {
    'darkStyle': {
        'image': 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
        'title': 'Dark style',
        'name': 'darkStyle'
    },
    'lightStyle': {
        'image': 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
        'title': 'Light style',
        'name': 'lightStyle'
    }
}
export const NAVIGATION_MODE = {
    'siderMenu': {
        'image': 'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
        'title': 'Side Menu Layout',
        'name': 'siderMenu'
    },
    'topMenu': {
        'image': 'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
        'title': 'Top Menu Layout',
        'name': 'topMenu'
    }
}

export const SITEKEY_RECAPTCHA = '6LdQgVgUAAAAAD524_EhALEW3HymJ4VE9gpzMo3w';
/**
 * vào trang https://www.google.com/recaptcha/admin#list
 * Label: tên
 * Choose the type of reCAPTCHA : chọn reCAPTCHA
 * Domains : up lên hosting thay Domains vô. hiện đang dùng trên localhost
 * Site key : coppy thay thế
 */

export const SEA_FCL = 1;
export const SEA_LCL = 2;
export const AIR = 3;
export const ROAD = 4;
export const MULTI = 6;
export const CONTAINER_TYPE_1 = "20' ST, 40' ST, 40' HC";
export const CONTAINER_TYPE_2 = "20' RF, 40' RF";
export const CONTAINER_TYPE_3 = "OVERWEIGHT";
export const CARRIER_TYPE = 2;
export const FORWARDER_TYPE = 3;
export const GROUP_ALL = -1;
export const GROUP_RIVER_PORTS = -2;
export const GROUP_OCEAN_PORTS = -3;
export const RIVER_PORT_TYPE = 2;
export const OCEAN_PORT_TYPE = 1;
export const PER_PAGE = 20;
export const PAGE_SIZE = 10;
export const TRUCK_TYPE = {
    1: "20ST",
    2: "40ST",
    3: "40HC",
    4: "45HC",
    5: "20OT",
    6: "40OT",
    7: "20RF",
    8: "40RF",
    9: "20FR",
    10: "40FR",
    11: "1.25T",
    12: "2.5T",
    13: "3.5T",
    14: "5T",
    15: "8T",
    16: "10T",
    17: "Other"
}

export const TAX_RATE = {
    "RATE": 10
}

export const TRANSPORT_TYPE = {
    1: "SEA FCL",
    2: "SEA LCL",
    3: "AIR FREIGHT",
    4: "ROAD"
}

export const FILTER = {
    ALL: "ALL",
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    IS_SADMIN: "IS_SADMIN"
};

export const CONTAINER_TRUCK = [
    {value: 1, label: "20'ST"},
    {value: 2, label: "40'ST"},
    {value: 3, label: "40'HC"},
    {value: 4, label: "45'HC"}
];

export const ROAD_TYPE = {
    // "CONTAINER_TRUCK": "Container Truck",
    // "FTL": "Tilt 82м³ (FTL)",
    // "LTL": "Less Truck Load (LTL)",
    // "T_14M": "2т - 14м³",
    "20ST": "20' ST",
    "40ST": "40' ST",
    "40HC": "40' HC",
    "45HC": "45' HC",
    "20OT": "20' OT",
    "40OT": "40' OT",
    "20RF": "20' RF",
    "40RF": "40' RF",
    "20FR": "20' FR",
    "40FR": "40' FR",
    "1.25T": "1.25T",
    "2.5T": "2.5T",
    "3.5T": "3.5T",
    "5T": "5T",
    "8T": "8T",
    "10T": "10T",
    "Other": "Other"
}

export const ENUM_TRANSPORT_METHOD = {
    "1": "FCL",
    "2": "LCL",
    "3": "AIR",
    "4": "ROAD"
}

export const FCL_INDEX = {
    '20\' ST, 40\' ST, 40\' HC': 1,
    '20\' RF, 40\' RF': 2,
    'OVERWEIGHT': 3
}

export const FCL = {
    '20\' ST, 40\' ST, 40\' HC, 45\' HC': {
        '20ST': {
            name: '20ST',
            title: '20\' ST'
        },
        '40ST': {
            name: '40ST',
            title: '40\' ST'
        },
        '40HC': {
            name: '40HC',
            title: '40\' HC'
        },
        '45HC': {
            name: '45HC',
            title: '45\' HC'
        }
    },
    '20\' RF, 40\' RF': {
        '20RF': {
            name: '20RF',
            title: '20\' RF'
        },
        '40RF': {
            name: '40RF',
            title: '40\' RF'
        },
    },
    'OVERWEIGHT': {
        // '>18mt': {
        //     name: '>18mt',
        //     title: '>18MT'
        // },
        // '>21mt': {
        //     name: '>21mt',
        //     title: '>21MT'
        // },
        // '>24mt': {
        //     name: '>24mt',
        //     title: '>24MT'
        // },
        '20FR': {
            name: '20FR',
            title: '20\' FR'
        },
        '40FR': {
            name: '40FR',
            title: '40\' FR'
        },
        '20OT': {
            name: '20OT',
            title: '20\' OT'
        },
        '40OT': {
            name: '40OT',
            title: '40\' OT'
        }
    }
}
export const LOAD_TYPE = {
    FCL: {
        DRY: {
            "20\'": "20\'",
            "40\'": "40\'",
            "40HC": "40HC",
        },
        RF: {
            '20RF': "20RF",
            '40RF': "40RF",
        },
        OOG: {
            '20OT': '20OT',
            '40OT': '40OT',
            '20RF': '20RF',
            '40RF': '40RF'
        }
    },
    LCL: {
        DRY: {
            "20\'": "20\'",
            "40\'": "40\'",
            "40HC": "40HC",
        },
        RF: {
            '20RF': "20RF",
            '40RF': "40RF",
        },
        OOG: {
            '20OT': '20OT',
            '40OT': '40OT',
            '20FR': '20FR',
            '40FR': '40FR'
        }
    }
}

export const LOAD_TYPE_INDEX = {
    FCL: 1,
    LCL: 2
}

export const LOAD_CONTAINER_TYPE_INDEX = {
    DRY: 1,
    REF: 2,
    OOG: 3
}
export const LOAD_CONTAINER_TYPE_INDEX_EDIT = {
    14: 'DRY',
    12: 'RF',
    13: 'OOG'
}

export const TEMPERATURE_TYPE = {
    C: 'C',
    F: 'F'
}

export const SEGMENT_QUOTE_LABEL = {
    FCL: "FCL",
    LCL: "LCL",
    DRY: "DRY",
    REF: "REF",
    OOG: "OOG",
    "20\'": "20\'",
    "40\'": "40\'",
    "40HC": "40HC",
    '20REF': "20REF",
    '40REF': "40REF",
    '20OT': '20OT',
    '40OT': '40OT',
    '20RF': '20RF',
    '40RF': '40RF',
    C: 'C',
    F: 'F'
}

export const HANDBOOK_DETAIL_IMAGE_TYPE = 1
export const CRETE_EDIT_IMAGE_TYPE = 2
export const BASE_URL_CLOUDINARY = "http://res.cloudinary.com/fingroupvietnam/image/upload/";
export const BASE_URL_NO_IMAGE_CLOUDINARY = "http://res.cloudinary.com/fingroupvietnam/image/upload/no-image.jpg";
export const CONTACT_TYPE = {
    CUSTOMER: 1,
    CARRIER: 2,
    FORWARDER: 3,
    VENDOR: 5,
}

//key from huyhienvu@gmail.com
export const loadGoogleMapsSdkKey = "AIzaSyDQQEd-25h1vNZwMxk1z-odE3EqAO6__UU";

export const DIRECTION = [
    {value: 1, label: "Import"},
    {value: 2, label: "Export"},
    {value: 3, label: "Domestic"}
];

export const INCOTERMS = [
    {value: 1, label: "EXW (Ex Works)"},
    {value: 2, label: "FCA (Free Carrier)"},
    {value: 3, label: "FAS (Free Alongside Ship)"},
    {value: 4, label: "FOB (Free On Board)"},
    {value: 5, label: "CFR (Cost & Freight)"},
    {value: 6, label: "CIF (Cost Insurance & Freight)"},
    {value: 7, label: "CPT (Carriage Paid To)"},
    {value: 8, label: "CIP (Carriage Insurance Paid To)"},
    {value: 9, label: "DAT (Delivered at Terminal)"},
    {value: 10, label: "DAP (Delivered at Place)"},
    {value: 11, label: "DDP (Delivered Duty Paid)"}
]

export const TRANSPORTATION_METHOD = {
    SEA: 1,
    AIR: 2,
    ROAD: 3
}

export const MODE = {
    1: 'SEA',
    2: 'AIR',
    3: 'ROAD'
}


export const TRANSPORTATION_TYPE_OPTION_OF_ROAD_METHOD = [
    {key: '<75', value: 1, label: "<75"},
    {key: 'STANDARD', value: 2, label: "Standard"},
    {key: 'AUTOTRAIN', value: 3, label: "Autotrain"},
    {key: 'MEGA', value: 4, label: "Mega"},
    {key: 'REFRIGERATOR', value: 5, label: "Refrigerator"},
    {key: 'TANK', value: 6, label: "Tank"},
    {key: 'AUTOCART', value: 7, label: "Autocart"},
    {key: 'CONTAINER', value: 8, label: "Container"},
    {key: 'LOWBED', value: 9, label: "Lowbed"},
    {key: 'BOX', value: 10, label: "Box"},
    {key: 'FLATBED', value: 11, label: "Flatbed"}
]

export const TRANSPORTATION_TYPE_OPTION = [
    {key: 'BULKCARRIER', value: 1, label: "Bulk carrier"},
    {key: 'CONTAINER', value: 2, label: "Container"},
    {key: 'TANKER', value: 3, label: "Tanker"},
    {key: 'RORO', value: 4, label: "RO-RO"},
    {key: 'FERRY', value: 5, label: "Ferry"},
    {key: 'REEFER', value: 6, label: "Reefer"},
    {key: 'GASCARRIER', value: 7, label: "Gas carrier"},
    {key: 'TUGBOAT', value: 8, label: "Tug Boat"},
    {key: 'MULTIPURPOSE', value: 9, label: "Multi-purpose"}
]

export const TRANSPORTATION_TYPE_OPTIONS = {
    1: [
        {key: 'BULKCARRIER', value: 1, label: "Bulk carrier"},
        {key: 'CONTAINER', value: 2, label: "Container"},
        {key: 'TANKER', value: 3, label: "Tanker"},
        {key: 'RORO', value: 4, label: "RO-RO"},
        {key: 'FERRY', value: 5, label: "Ferry"},
        {key: 'REEFER', value: 6, label: "Reefer"},
        {key: 'GASCARRIER', value: 7, label: "Gas carrier"},
        {key: 'TUGBOAT', value: 8, label: "Tug Boat"},
        {key: 'MULTIPURPOSE', value: 9, label: "Multi-purpose"}
    ],
    2: [],
    3: [
        {key: 'CONTAINER', value: 1, label: "Container"},
        {key: 'TRUCK', value: 2, label: "Truck"},
    ]
}

export const SHOW_TYPE_SEGMENT = {
    '12': 1,
    '20': 0,
    '31': 2,
    '32': 2
}

export const INIT_SEGMENTS = {
    0: [
        {
            descriptions: ''
        }
    ],
    1: [
        {
            "quantity": "",
            "load_type": "",
            "type": '',
            "size": "",
            "description": "",
            // "temperature": "",
            // "temperature_type": "",
            // "width": 12,
            // "height": 2,
            // "length": 2
        }
    ],
    2: [
        {
            key: 0,
            quantity: 1,
            size: undefined,
            temperature: '',
            temperature_type: 'C',
            description: '',
            type: undefined,

        }
    ]
}

// export const TRANSPORTATION_TYPE_OPTION_ROAD = [
//     { key: 'BULKCARRIER', value: 1, label: "Bulk carrier road" },
//     { key: 'CONTAINER', value: 2, label: "Container road" },
// ]

export const TRANSPORTATION_TYPE = {
    BULKCARRIER: 1,
    CONTAINER: 2,
    TANKER: 3,
    RORO: 4,
    FERRY: 5,
    REEFER: 6,
    GASCARRIER: 7,
    TUGBOAT: 8,
    MULTIPURPOSE: 9
}

export const DATE_FORMAT_FOR_DISPLAY = "MM-DD-YYYY"
export const DATE_FORMAT_FOR_DISPLAY_NEWS = "MM-DD-YYYY"
export const DATE_FORMAT_FOR_API = "YYYY-MM-DD"

export const CONTAINER_TYPE = {
    1: {
        label: "Select All FCL",
        groupName: "FCL",
        data: {
            '20ST': "20' ST",
            '40ST': "40' ST",
            '40HC': "40' HC",
            '45HC': "45' HC",
            '20RF': "20' RF",
            '40RF': "40' RF",
            '20OT': "20' OT",
            '40OT': "40' OT",
            '20FR': "20' FR",
            '40FR': "40' FR"
        }
    },
    2: {
        label: "Select All LCL",
        groupName: "LCL",
        data: {
            'CBM': "CBM"
        }
    },
    3: {
        label: "Select All Air",
        groupName: "Air",
        data: {
            '45Kg': '45 Kg',
            '100Kg': "100 Kg",
            '300Kg': "300 Kg",
            '500Kg': "500 Kg",
            '1000Kg': "1000 Kg"
        }
    },
    4: {
        label: "Select All Road",
        groupName: "Road",
        data: {
            '20ST': "20' ST",
            '40ST': "40' ST",
            '40HC': "40' HC",
            '45HC': "45' HC",
            '20RF': "20' RF",
            '40RF': "40' RF",
            '20OT': "20' OT",
            '40OT': "40' OT",
            '20FR': "20' FR",
            '40FR': "40' FR",
            "1.25T": "1.25T",
            "2.5T": "2.5T",
            "3.5T": "3.5T",
            "5T": "5T",
            "8T": "8T",
            "10T": "10T",
            "Other": "Other"
        }
    }
}

export const QUOTE_STATUS = {
    1: "Draft",
    2: "Pending",
    3: "Cancel",
    4: "Negotiated",
    5: "Failure",
    6: "Expired",
    7: "Secured",
    8: "Overdue"
}

export const QUOTE_WORKFLOW = {
    1: {
        3: {
            'id': 3,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    },
    2: {
        4: {
            'id': 4,
            'bg': 'rgb(156, 39, 176)',
            'text': 'Receive',
            'value': 'receive'
        },
        5: {
            'id': 5,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Reject',
            'value': 'reject'
        },
        6: {
            'id': 6,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Expired',
            'value': 'expire'
        }
    },
    4: {
        7: {
            'id': 7,
            'bg': 'rgb(23, 168, 139)',
            'text': 'Accept',
            'value': 'accept'
        },
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Reject',
            'value': 'reject'
        }
    },
    7: {
        10: {
            'id': 10,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Reject',
            'value': 'reject'
        }
    }
}

export const QUOTE_TRANSPORTATION_METHOD = [
    {value: 1, label: "SEA"},
    {value: 3, label: "AIR"},
    {value: 4, label: "ROAD"},
    {value: 6, label: "MULTI"}
];

export const QUOTE_METHOD = [
    {value: 1, label: "SEA"},
    {value: 3, label: "AIR"},
    {value: 4, label: "ROAD"},
    {value: 6, label: "MULTI"}
];

export const SHIPMENT_TRANSPORTATION_METHOD = {
    SEA: 1,
    AIR: 2,
    ROAD: 3,
    MULTI: 4
}

export const SHIPMENT_TRANSPORTATION_METHOD_KEY_NUMBER = {
    1: "SEA",
    2: "AIR",
    3: "ROAD",
    4: "MULTI"
}


export const SHIPMENT_TRANSPORTATION_TYPE_OPTION_ROAD = {
    1: "Bulk carrier",
    2: "Container",
    3: "Tanker",
    4: "RO-RO",
    5: "Ferry",
    6: "Reefer",
    7: "Gas carrier",
    8: "Tug Boat",
    9: "Multi-purpose"
}

export const QUOTE_TRANSPORTATION_TYPE_OPTION = {
    1: "Bulk carrier",
    2: "Container",
    3: "Tanker",
    4: "RO-RO",
    5: "Ferry",
    6: "Reefer",
    7: "Gas carrier",
    8: "Tug Boat",
    9: "Multi-purpose"
}

export const QUOTE_LOAD_TYPE = {
    1: "FCL",
    2: "LCL"
}

export const FORM_DETAIL_TRUCK_TYPE = [
    {value: '1', label: "1.25 T"},
    {value: '2', label: "2.5 T"},
    {value: '3', label: "3.5 T"},
    {value: '4', label: "5 T"},
    {value: '5', label: "8 T"},
    {value: '6', label: "10 T"},
    {value: '7', label: "Other"}
]

export const CONTAINER_SIZE_QUOTE = {
    "14": "20' ST",
    "15": "40' ST",
    "16": "40' HC",
    "17": "45' HC",
    "8": "20' RF",
    "9": "40' RF",
    "10": "20' OT",
    "11": "40' OT",
    "12": "20' FR",
    "13": "40' FR",
    "1": "1.25T",
    "2": "2.5T",
    "3": "3.5T",
    "4": "5T",
    "5": "8T",
    "6": "10T",
    "7": "Other"
}

export const FORM_DETAIL_TYPE = [
    {value: '12', label: "RF"},
    {value: '14', label: "DRY"}

]

export const QUOTE_DIRECTION = {
    1: "Import",
    2: "Export",
    3: "Domestic"
}

export const QUOTE_INCOTERMS = {
    1: "EXW (Ex Works)",
    2: "FCA (Free Carrier)",
    3: "FAS (Free Alongside Ship)",
    4: "FOB (Free On Board)",
    5: "CFR (Cost & Freight)",
    6: "CIF (Cost Insurance & Freight)",
    7: "CPT (Carriage Paid To)",
    8: "CIP (Carriage Insurance Paid To)",
    9: "DAT (Delivered at Terminal)",
    10: "DAP (Delivered at Place)",
    11: "DDP (Delivered Duty Paid)"
}

export const QUOTE_SEGMENT_LOAD_TYPE = {
    1: "FCL",
    2: "LCL"
}

export const QUOTE_SEGMENT_TYPE = {
    1: "DRY (standard, no special requirements)",
    2: "REF (standard, required temperature control)",
    3: "OOG (Out of Gauge - oversize, overweight)"
}

export const QUOTE_TRANSPORT_METHOD_ROAD = {
    1: 'Container',
    2: 'Truck'
}

export const SHIPMENT_TYPE = {
    "1": "FCL",
    "2": "LCL"
};

export const STATUS_QUOTE = {
    O: {
        value: 0,
        statusName: 'cancelQuote',
        background: '#f50'
    },
    1: {
        value: 1,
        statusName: 'waitingQuote',
        background: '#2db7f5'
    },
    2: {
        value: 2,
        statusName: 'readyQuote',
        background: '#EE9625'
    },
    3: {
        value: 3,
        statusName: 'acceptedQuote',
        background: '#87d068'
    },
    4: {
        value: 4,
        statusName: 'expicedQuote',
        background: '#A2A2A2'
    }
};
export const FIELD_LOCAL_CHARGE = [
    {
        title: 'LCDP',
        class: 'departure_port_fee'
    },
    {
        title: 'O/F',
        class: 'ocean_freight'
    },
    {
        title: 'LCAP',
        class: 'arrival_port_fee'
    }
]
export const OPTIONS = [
    {id: "Mon", name: 'Mon'},
    {id: "Tue", name: 'Tue'},
    {id: "Wed", name: 'Wed'},
    {id: "Thu", name: 'Thu'},
    {id: "Fri", name: 'Fri'},
    {id: "Sat", name: 'Sat'},
    {id: "Sun", name: 'Sun'},
]
export const DARA_NEED_VALIDATE = ["key", "id", "currency", "cut_off", "etd", "ttd", "validity_to", "remark"]
export const MT18 = ["ocean_freight_18", "departure_port_fee_18", "arrival_port_fee_18"]
export const MT20 = ["ocean_freight_20", "departure_port_fee_20", "arrival_port_fee_20"]
export const MT24 = ["ocean_freight_24", "departure_port_fee_24", "arrival_port_fee_24"]
export const REF20 = ["ocean_freight_20", "departure_port_fee_20", "arrival_port_fee_20"]
export const REF40 = ["ocean_freight_40", "departure_port_fee_40", "arrival_port_fee_40"]

export const UNITSFCL = [
    {id: "bill", name: "bill"},
    {id: "cont", name: "cont"},
]
export const UNITSLCL = [
    {id: "cbm", name: "cbm"},
    {id: "set", name: "set"},
    {id: "bill", name: "bill"},
]
export const UNITSAIR = [
    {id: "bill", name: "bill"},
    {id: "kg", name: "kg"},
    {id: "cbm", name: "cbm"},
]

export const QUOTE_STATUS_ENUM = {
    DRAFT: 1
}
export const BIDS_STATUS = {
    DEFAULT: 0,
    ACCEPT: 1,
    REJECT: 2,
    EXPIRED: 3
}
export const NOTIFICATION_STATUS_QUOTE = {
    'cancel': 'Are you sure to cancel this quote?',
    'receive': 'Are you sure to receive this quote?',
    'expire': 'Are you sure to expired this quote?',
    'reject': 'Are you sure to reject this quote?',
    'accept': 'Are you sure to accept this quote?',
}

export const ORDER_STATUS = [
    {
        key: 1,
        name: 'Quoting'
    },
    {
        key: 2,
        name: 'Contract waiting'
    },
    {
        key: 3,
        name: 'Commercial Contract signed'
    },
    {
        key: 4,
        name: 'Domestics Contract signed'
    },
    {
        key: 5,
        name: 'Deposit paid'
    },
    {
        key: 6,
        name: 'Product finished'
    },
    {
        key: 7,
        name: 'Delivered to FWD'
    },
    {
        key: 8,
        name: 'Order Delete'
    },
    {
        key: 9,
        name: 'Order Cancel'
    },
]

export const STATUS_ORDER = {
    1: {
        statusName: 'Quoting',
        background: 'rgb(234, 165, 83)'
    },
    2: {
        statusName: 'Contract Waiting',
        background: 'rgb(54, 121, 251)'
    },
    3: {
        statusName: 'Commercial Contract Signed',
        background: 'rgb(229, 52, 61)'
    },
    4: {
        statusName: 'Domestics Contract Signed',
        background: 'rgb(183, 30, 174)'
    },
    5: {
        statusName: 'Deposit Paid',
        background: 'rgb(229, 52, 61)'
    },
    6: {
        statusName: 'Product Finished',
        background: 'rgb(229, 52, 61)'
    },
    7: {
        statusName: 'Delivered to FWD',
        background: 'rgb(79, 202, 133)'
    },
    8: {
        statusName: 'Order Delete',
        background: 'rgb(229, 52, 61)'
    },
    9: {
        statusName: 'Order Cancel',
        background: 'rgb(229, 52, 61)'
    }
}

export const ORDER_WORKFLOW = {
    1: {
        1: {
            'id': 1,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Contract Waiting',
            'value': 'contract_waiting'
        },
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delete',
            'value': 'delete'
        },
        9: {
            'id': 9,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    },
    2: {
        2: {
            'id': 2,
            'bg': 'rgb(156, 39, 176)',
            'text': 'Commercial Contract Signed',
            'value': 'commercial_contract_signed'
        },
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delete',
            'value': 'delete'
        },
        9: {
            'id': 9,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    },
    3: {
        3: {
            'id': 3,
            'bg': 'rgb(23, 168, 139)',
            'text': 'Domestics Contract Signed',
            'value': 'domestics_contract_signed'
        },
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delete',
            'value': 'delete'
        },
        9: {
            'id': 9,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    },
    4: {
        4: {
            'id': 4,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Deposit paid',
            'value': 'deposit_paid'
        },
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delete',
            'value': 'delete'
        },
        9: {
            'id': 9,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    },
    5: {
        5: {
            'id': 5,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Product Finished',
            'value': 'product_finished'
        },
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delete',
            'value': 'delete'
        },
        9: {
            'id': 9,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    },
    6: {
        6: {
            'id': 6,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delivery to FWD',
            'value': 'delivery_to_fwd'
        },
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delete',
            'value': 'delete'
        },
        9: {
            'id': 9,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    },
    7: {
        8: {
            'id': 8,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Delete',
            'value': 'delete'
        },
        9: {
            'id': 9,
            'bg': 'rgb(229, 52, 61)',
            'text': 'Cancel',
            'value': 'cancel'
        }
    }
}
export const NOTIFICATION_STATUS_ORDER = {
    'waiting': 'Are you sure to contract waiting this order?',
    'commercial': 'Are you sure to commercial contract signed this order?',
    'domestics': 'Are you sure to domestics contract signed this order?',
    'deposit': 'Are you sure to deposit paid this order?',
    'finished': 'Are you sure to product finished this order?',
    'delivered': 'Are you sure to delivered to FWD this order?',
    'cancel': 'Are you sure to cancel this order?',
    'delete': 'Are you sure to delete this order?'
}

export const DEFAULT_CURRENCY = "USD"

// export const MONEY_FLOW_TYPE = {
//     "Receivables" : 1,
//     "Payables" : 2,
// }

// export const INVOICE_TYPES = {
//     "Shipment" : 1,
//     "Order" : 2
// }

export const INVOICE_TYPE = {
    ORDER: 1,
    SHIPNENT: 2

}

export const INVOICE_MONEY_FLOW_TYPE = {
    RECEIVABLE: 1,
    PAYABLE: 2
}
