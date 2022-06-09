var district_list = [
    {name: "North and Middle Andaman", code:  1},
    {name: "South Andaman", code: 2},
    {name: "Nicobar", code: 3},
    {name: "Krishna", code: 4},
    {name: "Guntur", code: 5},
    {name: "YSR District, Kadapa (Cuddapah)", code: 6},
    {name: "Kurnool", code: 7},
    {name: "Visakhapatnam", code: 8},
    {name: "Anantapur", code: 9},
    {name: "Chittoor", code: 10},
    {name: "East Godavari", code: 11},
    {name: "Prakasam", code: 12},
    {name: "Sri Potti Sriramulu Nellore", code: 13},
    {name: "Srikakulam", code: 14},
    {name: "Vizianagaram", code: 15},
    {name: "West Godavari", code: 16},
    {name: "Itanagar Capital Complex", code: 17},
    {name: "Lower Siang", code: 18},
    {name: "Pakke Kessang", code: 19},
    {name: "Changlang", code: 20},
    {name: "Kurung Kumey", code: 21},
    {name: "Anjaw", code: 22},
    {name: "East Kameng", code: 23},
    {name: "Kamle", code: 24},
    {name: "Dibang Valley", code: 25},
    {name: "Tirap", code: 26},
    {name: "Kra Daadi", code: 27},
    {name: "West Kameng", code: 28},
    {name: "Lohit", code: 29},
    {name: "Tawang", code: 30},
    {name: "Lower Dibang Valley", code: 31},
    {name: "Lower Subansiri", code: 32},
    {name: "Lepa Rada", code: 33},
    {name: "Upper Siang", code: 34},
    {name: "Shi Yomi", code: 35},
    {name: "Namsai", code: 36},
    {name: "Siang", code: 37},
    {name: "West Siang", code: 38},
    {name: "Papum Pare", code: 39},
    {name: "Longding", code: 40},
    {name: "Upper Subansiri", code: 41},
    {name: "East Siang", code: 42},
    {name: "Dibrugarh", code: 43},
    {name: "Sivasagar", code: 44},
    {name: "Tinsukia", code: 45},
    {name: "Baksa", code: 46},
    {name: "Barpeta", code: 47},
    {name: "Darrang", code: 48},
    {name: "Kamrup Metropolitan", code: 49},
    {name: "Kamrup Rural", code: 50},
    {name: "Karbi-Anglong", code: 51},
    {name: "Nalbari", code: 52},
    {name: "Golaghat", code: 53},
    {name: "Jorhat", code: 54},
    {name: "Morigaon", code: 55},
    {name: "Nagaon", code: 56},
    {name: "Bongaigaon", code: 57},
    {name: "Chirang", code: 58},
    {name: "Dhubri", code: 59},
    {name: "Goalpara", code: 60},
    {name: "Kokrajhar", code: 61},
    {name: "Dhemaji", code: 62},
    {name: "Lakhimpur", code: 63},
    {name: "Sonitpur", code: 64},
    {name: "Udalguri", code: 65},
    {name: "Cachar", code: 66},
    {name: "Dima Hasao", code: 67},
    {name: "Hailakandi", code: 68},
    {name: "Karimganj", code: 69},
    {name: "Madhepura", code: 70},
    {name: "Saharsa", code: 71},
    {name: "Supaul", code: 72},
    {name: "Purnia", code: 73},
    {name: "Araria", code: 74},
    {name: "Katihar", code: 75},
    {name: "Kishanganj", code: 76},
    {name: "Aurangabad", code: 77},
    {name: "Arwal", code: 78},
    {name: "Gaya", code: 79},
    {name: "Kaimur", code: 80},
    {name: "Rohtas", code: 81},
    {name: "Bhagalpur", code: 82},
    {name: "Banka", code: 83},
    {name: "Lakhisarai", code: 84},
    {name: "Munger", code: 85},
    {name: "Muzaffarpur", code: 86},
    {name: "Sheohar", code: 87},
    {name: "Sitamarhi", code: 88},
    {name: "Vaishali", code: 89},
    {name: "Nalanda", code: 90},
    {name: "Jehanabad", code: 91},
    {name: "Nawada", code: 92},
    {name: "Sheikhpura", code: 93},
    {name: "Darbhanga", code: 94},
    {name: "Madhubani", code: 95},
    {name: "Samastipur", code: 96},
    {name: "Patna", code: 97},
    {name: "Begusarai", code: 98},
    {name: "Bhojpur", code: 99},
    {name: "Buxar", code: 100},
    {name: "Khagaria", code: 101},
    {name: "Saran", code: 102},
    {name: "Siwan", code: 103},
    {name: "Gopalganj", code: 104},
    {name: "East Champaran", code: 105},
    {name: "West Champaran", code: 106},
    {name: "Jamui", code: 107},
    {name: "Chandigarh", code: 108},
    {name: "Raipur", code: 109},
    {name: "Balod", code: 110},
    {name: "Baloda bazar", code: 111},
    {name: "Balrampur", code: 112},
    {name: "Bastar", code: 113},
    {name: "Bemetara", code: 114},
    {name: "Bijapur", code: 115},
    {name: "Bilaspur", code: 116},
    {name: "Dantewada", code: 117},
    {name: "Dhamtari", code: 118},
    {name: "Durg", code: 119},
    {name: "Gariaband", code: 120},
    {name: "Janjgir-Champa", code: 121},
    {name: "Jashpur", code: 122},
    {name: "Kanker", code: 123},
    {name: "Kondagaon", code: 124},
    {name: "Korba", code: 125},
    {name: "Koriya", code: 126},
    {name: "Mahasamund", code: 127},
    {name: "Mungeli", code: 128},
    {name: "Narayanpur", code: 129},
    {name: "Raigarh", code: 130},
    {name: "Rajnandgaon", code: 131},
    {name: "Sukma", code: 132},
    {name: "Surajpur", code: 133},
    {name: "Surguja", code: 134},
    {name: "Kawardha", code: 135},
    {name: "Gaurela Pendra Marwahi ", code: 136},
    {name: "Dadra and Nagar Haveli", code: 137},
    {name: "Daman", code: 138},
    {name: "Diu", code: 139},
    {name: "New Delhi", code: 140},
    {name: "Central Delhi", code: 141},
    {name: "West Delhi", code: 142},
    {name: "North West Delhi", code: 143},
    {name: "South East Delhi", code: 144},
    {name: "East Delhi", code: 145},
    {name: "North Delhi", code: 146},
    {name: "North East Delhi", code: 147},
    {name: "Shahdara", code: 148},
    {name: "South Delhi", code: 149},
    {name: "South West Delhi", code: 150},
    {name: "North Goa", code: 151},
    {name: "South Goa", code: 152},
    {name: "Gandhinagar", code: 153},
    {name: "Ahmedabad", code: 154},
    {name: "Vadodara", code: 155},
    {name: "Kheda", code: 156},
    {name: "Surendranagar", code: 157},
    {name: "Aravalli", code: 158},
    {name: "Banaskantha", code: 159},
    {name: "Mehsana", code: 160},
    {name: "Patan", code: 161},
    {name: "Sabarkantha", code: 162},
    {name: "Dang", code: 163},
    {name: "Navsari", code: 164},
    {name: "Surat", code: 165},
    {name: "Tapi", code: 166},
    {name: "Valsad", code: 167},
    {name: "Devbhumi Dwaraka", code: 168},
    {name: "Jamnagar", code: 169},
    {name: "Kutch", code: 170},
    {name: "Morbi", code: 171},
    {name: "Porbandar", code: 172},
    {name: "Rajkot", code: 173},
    {name: "Amreli", code: 174},
    {name: "Bhavnagar", code: 175},
    {name: "Botad", code: 176},
    {name: "Gir Somnath", code: 177},
    {name: "Junagadh", code: 178},
    {name: "Anand", code: 179},
    {name: "Bharuch", code: 180},
    {name: "Chhotaudepur", code: 181},
    {name: "Dahod", code: 182},
    {name: "Mahisagar", code: 183},
    {name: "Narmada", code: 184},
    {name: "Panchmahal", code: 185},
    {name: "Kurukshetra", code: 186},
    {name: "Panchkula", code: 187},
    {name: "Gurgaon", code: 188},
    {name: "Jhajjar", code: 189},
    {name: "Kaithal", code: 190},
    {name: "Hisar", code: 191},
    {name: "Rohtak", code: 192},
    {name: "Ambala", code: 193},
    {name: "Sirsa", code: 194},
    {name: "Panipat", code: 195},
    {name: "Fatehabad", code: 196},
    {name: "Yamunanagar", code: 197},
    {name: "Sonipat", code: 198},
    {name: "Faridabad", code: 199},
    {name: "Bhiwani", code: 200},
    {name: "Charkhi Dadri", code: 201},
    {name: "Rewari", code: 202},
    {name: "Karnal", code: 203},
    {name: "Jind", code: 204},
    {name: "Nuh", code: 205},
    {name: "Mahendragarh", code: 206},
    {name: "Palwal", code: 207},
    {name: "Shimla", code: 208},
    {name: "Solan", code: 209},
    {name: "Lahaul Spiti", code: 210},
    {name: "Kullu", code: 211},
    {name: "Sirmaur", code: 212},
    {name: "Kangra", code: 213},
    {name: "Chamba", code: 214},
    {name: "Mandi", code: 215},
    {name: "Kinnaur", code: 216},
    {name: "Hamirpur", code: 217},
    {name: "Una", code: 218},
    {name: "Bilaspur", code: 219},
    {name: "Srinagar", code: 220},
    {name: "Kulgam", code: 221},
    {name: "Shopian", code: 222},
    {name: "Bandipore", code: 223},
    {name: "Anantnag", code: 224},
    {name: "Baramulla", code: 225},
    {name: "Kupwara", code: 226},
    {name: "Pulwama", code: 227},
    {name: "Ganderbal", code: 228},
    {name: "Budgam", code: 229},
    {name: "Jammu", code: 230},
    {name: "Kishtwar", code: 231},
    {name: "Doda", code: 232},
    {name: "Udhampur", code: 233},
    {name: "Kathua", code: 234},
    {name: "Ramban", code: 235},
    {name: "Samba", code: 236},
    {name: "Rajouri", code: 237},
    {name: "Poonch", code: 238},
    {name: "Reasi", code: 239},
    {name: "Ranchi", code: 240},
    {name: "Koderma", code: 241},
    {name: "Bokaro", code: 242},
    {name: "Garhwa", code: 243},
    {name: "Latehar", code: 244},
    {name: "Chatra", code: 245},
    {name: "Palamu", code: 246},
    {name: "East Singhbhum", code: 247},
    {name: "Seraikela Kharsawan", code: 248},
    {name: "Simdega", code: 249},
    {name: "Lohardaga", code: 250},
    {name: "Gumla", code: 251},
    {name: "Khunti", code: 252},
    {name: "Deoghar", code: 253},
    {name: "Ramgarh", code: 254},
    {name: "Hazaribagh", code: 255},
    {name: "Giridih", code: 256},
    {name: "Dhanbad", code: 257},
    {name: "Dumka", code: 258},
    {name: "Jamtara", code: 259},
    {name: "Sahebganj", code: 260},
    {name: "Pakur", code: 261},
    {name: "Godda", code: 262},
    {name: "West Singhbhum", code: 263},
    {name: "Belgaum", code: 264},
    {name: "Bangalore Urban", code: 265},
    {name: "Mysore", code: 266},
    {name: "Gulbarga", code: 267},
    {name: "Chitradurga", code: 268},
    {name: "Dakshina Kannada", code: 269},
    {name: "Bagalkot", code: 270},
    {name: "Chamarajanagar", code: 271},
    {name: "Bidar", code: 272},
    {name: "Chikamagalur", code: 273},
    {name: "Bellary", code: 274},
    {name: "Davanagere", code: 275},
    {name: "Bangalore Rural", code: 276},
    {name: "Kolar", code: 277},
    {name: "Dharwad", code: 278},
    {name: "Haveri", code: 279},
    {name: "Gadag", code: 280},
    {name: "Uttar Kannada", code: 281},
    {name: "Koppal", code: 282},
    {name: "Kodagu", code: 283},
    {name: "Raichur", code: 284},
    {name: "Yadgir", code: 285},
    {name: "Udupi", code: 286},
    {name: "Shimoga", code: 287},
    {name: "Tumkur", code: 288},
    {name: "Hassan", code: 289},
    {name: "Mandya", code: 290},
    {name: "Chikkaballapur", code: 291},
    {name: "Ramanagara", code: 292},
    {name: "Vijayapura", code: 293},
    {name: "BBMP", code: 294},
    {name: "Kasaragod", code: 295},
    {name: "Thiruvananthapuram", code: 296},
    {name: "Kannur", code: 297},
    {name: "Kollam", code: 298},
    {name: "Wayanad", code: 299},
    {name: "Pathanamthitta", code: 300},
    {name: "Alappuzha", code: 301},
    {name: "Malappuram", code: 302},
    {name: "Thrissur", code: 303},
    {name: "Kottayam", code: 304},
    {name: "Kozhikode", code: 305},
    {name: "Idukki", code: 306},
    {name: "Ernakulam", code: 307},
    {name: "Palakkad", code: 308},
    {name: "Kargil", code: 309},
    {name: "Leh", code: 310},
    {name: "Lakshadweep", code: 311},
    {name: "Bhopal", code: 312},
    {name: "Gwalior", code: 313},
    {name: "Indore", code: 314},
    {name: "Jabalpur", code: 315},
    {name: "Rewa", code: 316},
    {name: "Sagar", code: 317},
    {name: "Ujjain", code: 318},
    {name: "Mandsaur", code: 319},
    {name: "Agar", code: 320},
    {name: "Shajapur", code: 321},
    {name: "Ratlam", code: 322},
    {name: "Neemuch", code: 323},
    {name: "Dewas", code: 324},
    {name: "Tikamgarh", code: 325},
    {name: "Panna", code: 326},
    {name: "Damoh", code: 327},
    {name: "Chhatarpur", code: 328},
    {name: "Umaria", code: 329},
    {name: "Singrauli", code: 330},
    {name: "Sidhi", code: 331},
    {name: "Shahdol", code: 332},
    {name: "Satna", code: 333},
    {name: "Anuppur", code: 334},
    {name: "Mandla", code: 335},
    {name: "Dindori", code: 336},
    {name: "Chhindwara", code: 337},
    {name: "Balaghat", code: 338},
    {name: "Khandwa", code: 339},
    {name: "Jhabua", code: 340},
    {name: "Dhar", code: 341},
    {name: "Burhanpur", code: 342},
    {name: "Barwani", code: 343},
    {name: "Khargone", code: 344},
    {name: "Shivpuri", code: 345},
    {name: "Sheopur", code: 346},
    {name: "Morena", code: 347},
    {name: "Guna", code: 348},
    {name: "Seoni", code: 349},
    {name: "Datia", code: 350},
    {name: "Bhind", code: 351},
    {name: "Narsinghpur", code: 352},
    {name: "Katni", code: 353},
    {name: "Ashoknagar", code: 354},
    {name: "Vidisha", code: 355},
    {name: "Sehore", code: 356},
    {name: "Alirajpur", code: 357},
    {name: "Rajgarh", code: 358},
    {name: "Raisen", code: 359},
    {name: "Hoshangabad", code: 360},
    {name: "Harda", code: 361},
    {name: "Betul", code: 362},
    {name: "Pune", code: 363},
    {name: "Akola", code: 364},
    {name: "Nagpur", code: 365},
    {name: "Amravati", code: 366},
    {name: "Buldhana", code: 367},
    {name: "Yavatmal", code: 368},
    {name: "Washim", code: 369},
    {name: "Bhandara", code: 370},
    {name: "Kolhapur", code: 371},
    {name: "Ratnagiri", code: 372},
    {name: "Sangli", code: 373},
    {name: "Sindhudurg", code: 374},
    {name: "Solapur", code: 375},
    {name: "Satara", code: 376},
    {name: "Wardha", code: 377},
    {name: "Gondia", code: 378},
    {name: "Gadchiroli", code: 379},
    {name: "Chandrapur", code: 380},
    {name: "Osmanabad", code: 381},
    {name: "Nanded", code: 382},
    {name: "Latur", code: 383},
    {name: "Beed", code: 384},
    {name: "Parbhani", code: 385},
    {name: "Hingoli", code: 386},
    {name: "Nandurbar", code: 387},
    {name: "Dhule", code: 388},
    {name: "Nashik", code: 389},
    {name: "Jalgaon", code: 390},
    {name: "Ahmednagar", code: 391},
    {name: "Thane", code: 392},
    {name: "Raigad", code: 393},
    {name: "Palghar", code: 394},
    {name: "Mumbai", code: 395},
    {name: "Jalna", code: 396},
    {name: "Aurangabad ", code: 397},
    {name: "Bishnupur", code: 398},
    {name: "Chandel", code: 399},
    {name: "Churachandpur", code: 400},
    {name: "Imphal East", code: 401},
    {name: "Imphal West", code: 402},
    {name: "Senapati", code: 403},
    {name: "Tamenglong", code: 404},
    {name: "Thoubal", code: 405},
    {name: "Ukhrul", code: 406},
    {name: "Tengnoupal", code: 407},
    {name: "Kangpokpi", code: 408},
    {name: "Kamjong", code: 409},
    {name: "Jiribam", code: 410},
    {name: "Pherzawl", code: 411},
    {name: "Noney", code: 412},
    {name: "Kakching", code: 413},
    {name: "East Khasi Hills", code: 414},
    {name: "South West Khasi Hills", code: 415},
    {name: "West Jaintia Hills", code: 416},
    {name: "Ri-Bhoi", code: 417},
    {name: "East Jaintia Hills", code: 418},
    {name: "West Khasi Hills", code: 419},
    {name: "West Garo Hills", code: 420},
    {name: "South Garo Hills", code: 421},
    {name: "South West Garo Hills", code: 422},
    {name: "North Garo Hills", code: 423},
    {name: "East Garo Hills", code: 424},
    {name: "Aizawl East", code: 425},
    {name: "Aizawl West", code: 426},
    {name: "Mamit", code: 427},
    {name: "Kolasib", code: 428},
    {name: "Champhai", code: 429},
    {name: "Serchhip", code: 430},
    {name: "Lunglei", code: 431},
    {name: "Lawngtlai", code: 432},
    {name: "Siaha", code: 433},
    {name: "Dimapur", code: 434},
    {name: "Peren", code: 435},
    {name: "Wokha", code: 436},
    {name: "Mokokchung", code: 437},
    {name: "Longleng", code: 438},
    {name: "Mon", code: 439},
    {name: "Tuensang", code: 440},
    {name: "Kohima", code: 441},
    {name: "Zunheboto", code: 442},
    {name: "Phek", code: 443},
    {name: "Kiphire", code: 444},
    {name: "Angul", code: 445},
    {name: "Khurda", code: 446},
    {name: "Balasore", code: 447},
    {name: "Balangir", code: 448},
    {name: "Ganjam", code: 449},
    {name: "Kandhamal", code: 450},
    {name: "Koraput", code: 451},
    {name: "Sambalpur", code: 452},
    {name: "Sundargarh", code: 453},
    {name: "Bhadrak", code: 454},
    {name: "Kendujhar", code: 455},
    {name: "Mayurbhanj", code: 456},
    {name: "Cuttack", code: 457},
    {name: "Dhenkanal", code: 458},
    {name: "Jagatsinghpur", code: 459},
    {name: "Jajpur", code: 460},
    {name: "Kendrapara", code: 461},
    {name: "Nayagarh", code: 462},
    {name: "Puri", code: 463},
    {name: "Kalahandi", code: 464},
    {name: "Nuapada", code: 465},
    {name: "Subarnapur", code: 466},
    {name: "Gajapati", code: 467},
    {name: "Boudh", code: 468},
    {name: "Malkangiri", code: 469},
    {name: "Nabarangpur", code: 470},
    {name: "Rayagada", code: 471},
    {name: "Bargarh", code: 472},
    {name: "Deogarh", code: 473},
    {name: "Jharsuguda", code: 474},
    {name: "Puducherry", code: 475},
    {name: "Karaikal", code: 476},
    {name: "Mahe", code: 477},
    {name: "Yanam", code: 478},
    {name: "Kapurthala", code: 479},
    {name: "Ferozpur", code: 480},
    {name: "Hoshiarpur", code: 481},
    {name: "Mansa", code: 482},
    {name: "Barnala", code: 483},
    {name: "Fatehgarh Sahib", code: 484},
    {name: "Amritsar", code: 485},
    {name: "Pathankot", code: 486},
    {name: "Fazilka", code: 487},
    {name: "Ludhiana", code: 488},
    {name: "Gurdaspur", code: 489},
    {name: "Sri Muktsar Sahib", code: 490},
    {name: "Moga", code: 491},
    {name: "Jalandhar", code: 492},
    {name: "Bathinda", code: 493},
    {name: "Patiala", code: 494},
    {name: "Tarn Taran", code: 495},
    {name: "SAS Nagar", code: 496},
    {name: "Rup Nagar", code: 497},
    {name: "Sangrur", code: 498},
    {name: "Faridkot", code: 499},
    {name: "SBS Nagar", code: 500},
    {name: "Bikaner", code: 501},
    {name: "Jodhpur", code: 502},
    {name: "Kota", code: 503},
    {name: "Udaipur", code: 504},
    {name: "Jaipur I", code: 505},
    {name: "Jaipur II", code: 506},
    {name: "Ajmer", code: 507},
    {name: "Bharatpur", code: 508},
    {name: "Sri Ganganagar", code: 509},
    {name: "Jhunjhunu", code: 510},
    {name: "Dausa", code: 511},
    {name: "Alwar", code: 512},
    {name: "Sikar", code: 513},
    {name: "Bundi", code: 514},
    {name: "Jhalawar", code: 515},
    {name: "Baran", code: 516},
    {name: "Hanumangarh", code: 517},
    {name: "Rajsamand", code: 518},
    {name: "Banswara", code: 519},
    {name: "Dungarpur", code: 520},
    {name: "Chittorgarh", code: 521},
    {name: "Pratapgarh", code: 522},
    {name: "Bhilwara", code: 523},
    {name: "Dholpur", code: 524},
    {name: "Karauli", code: 525},
    {name: "Tonk", code: 526},
    {name: "Jaisalmer", code: 527},
    {name: "Barmer", code: 528},
    {name: "Pali", code: 529},
    {name: "Churu", code: 530},
    {name: "Sirohi", code: 531},
    {name: "Nagaur", code: 532},
    {name: "Jalore", code: 533},
    {name: "Sawai Madhopur", code: 534},
    {name: "East Sikkim", code: 535},
    {name: "West Sikkim", code: 536},
    {name: "North Sikkim", code: 537},
    {name: "South Sikkim", code: 538},
    {name: "Coimbatore", code: 539},
    {name: "Madurai", code: 540},
    {name: "Thanjavur", code: 541},
    {name: "Viluppuram", code: 542},
    {name: "Vellore", code: 543},
    {name: "Kanyakumari", code: 544},
    {name: "Salem", code: 545},
    {name: "Pudukkottai", code: 546},
    {name: "Cuddalore", code: 547},
    {name: "Tirunelveli", code: 548},
    {name: "Virudhunagar", code: 549},
    {name: "Tirupattur", code: 550},
    {name: "Tenkasi", code: 551},
    {name: "Kallakurichi", code: 552},
    {name: "Tiruvannamalai", code: 553},
    {name: "Thoothukudi (Tuticorin)", code: 554},
    {name: "Ariyalur", code: 555},
    {name: "Dindigul", code: 556},
    {name: "Kanchipuram", code: 557},
    {name: "Namakkal", code: 558},
    {name: "Karur", code: 559},
    {name: "Tiruchirappalli", code: 560},
    {name: "Sivaganga", code: 561},
    {name: "Krishnagiri", code: 562},
    {name: "Erode", code: 563},
    {name: "Palani", code: 564},
    {name: "Chengalpet", code: 565},
    {name: "Dharmapuri", code: 566},
    {name: "Ramanathapuram", code: 567},
    {name: "Tiruppur", code: 568},
    {name: "Theni", code: 569},
    {name: "Perambalur", code: 570},
    {name: "Chennai", code: 571},
    {name: "Tiruvallur", code: 572},
    {name: "Paramakudi", code: 573},
    {name: "Tiruvarur", code: 574},
    {name: "Poonamallee", code: 575},
    {name: "Nagapattinam", code: 576},
    {name: "Nilgiris", code: 577},
    {name: "Attur", code: 578},
    {name: "Sivakasi", code: 580},
    {name: "Hyderabad", code: 581},
    {name: "Adilabad", code: 582},
    {name: "Bhadradri Kothagudem", code: 583},
    {name: "Jagtial", code: 584},
    {name: "Jangaon", code: 585},
    {name: "Jayashankar Bhupalpally", code: 586},
    {name: "Jogulamba Gadwal", code: 587},
    {name: "Jogulamba Gadwal", code: 587},
    {name: "Kamareddy", code: 588},
    {name: "Karimnagar", code: 589},
    {name: "Khammam", code: 590},
    {name: "Kumuram Bheem", code: 591},
    {name: "Mahabubabad", code: 592},
    {name: "Mahabubnagar", code: 593},
    {name: "Mancherial", code: 594},
    {name: "Medak", code: 595},
    {name: "Medchal", code: 596},
    {name: "Nagarkurnool", code: 597},
    {name: "Nalgonda", code: 598},
    {name: "Nirmal", code: 599},
    {name: "Nizamabad", code: 600},
    {name: "Peddapalli", code: 601},
    {name: "Rajanna Sircilla", code: 602},
    {name: "Rangareddy", code: 603},
    {name: "Sangareddy", code: 604},
    {name: "Siddipet", code: 605},
    {name: "Suryapet", code: 606},
    {name: "Vikarabad", code: 607},
    {name: "Wanaparthy", code: 608},
    {name: "Warangal(Rural)", code: 609},
    {name: "Warangal(Urban)", code: 610},
    {name: "Yadadri Bhuvanagiri", code: 611},
    {name: "Mulugu", code: 612},
    {name: "Narayanpet", code: 613},
    {name: "Dhalai", code: 614},
    {name: "Gomati", code: 615},
    {name: "Khowai", code: 616},
    {name: "North Tripura", code: 617},
    {name: "Sepahijala", code: 618},
    {name: "South Tripura", code: 619},
    {name: "Unakoti", code: 620},
    {name: "West Tripura", code: 621},
    {name: "Agra", code: 622},
    {name: "Aligarh", code: 623},
    {name: "Prayagraj", code: 624},
    {name: "Ambedkar Nagar", code: 625},
    {name: "Amethi", code: 626},
    {name: "Amroha", code: 627},
    {name: "Auraiya", code: 628},
    {name: "Azamgarh", code: 629},
    {name: "Badaun", code: 630},
    {name: "Baghpat", code: 631},
    {name: "Bahraich", code: 632},
    {name: "Balarampur", code: 633},
    {name: "Ballia", code: 634},
    {name: "Banda", code: 635},
    {name: "Barabanki", code: 636},
    {name: "Bareilly", code: 637},
    {name: "Basti", code: 638},
    {name: "Bijnour", code: 639},
    {name: "Bulandshahr", code: 640},
    {name: "Chandauli", code: 641},
    {name: "Chitrakoot", code: 642},
    {name: "Deoria", code: 643},
    {name: "Etah", code: 644},
    {name: "Etawah", code: 645},
    {name: "Ayodhya", code: 646},
    {name: "Farrukhabad", code: 647},
    {name: "Fatehpur", code: 648},
    {name: "Firozabad", code: 649},
    {name: "Gautam Buddha Nagar", code: 650},
    {name: "Ghaziabad", code: 651},
    {name: "Ghazipur", code: 652},
    {name: "Gonda", code: 653},
    {name: "Gorakhpur", code: 654},
    {name: "Hamirpur", code: 655},
    {name: "Hapur", code: 656},
    {name: "Hardoi", code: 657},
    {name: "Hathras", code: 658},
    {name: "Jalaun", code: 659},
    {name: "Jaunpur", code: 660},
    {name: "Jhansi", code: 661},
    {name: "Kannauj", code: 662},
    {name: "Kanpur Dehat", code: 663},
    {name: "Kanpur Nagar", code: 664},
    {name: "Kasganj", code: 665},
    {name: "Kaushambi", code: 666},
    {name: "Kushinagar", code: 667},
    {name: "Lakhimpur Kheri", code: 668},
    {name: "Lalitpur", code: 669},
    {name: "Lucknow", code: 670},
    {name: "Maharajganj", code: 671},
    {name: "Mahoba", code: 672},
    {name: "Mainpuri", code: 673},
    {name: "Mathura", code: 674},
    {name: "Mau", code: 675},
    {name: "Meerut", code: 676},
    {name: "Mirzapur", code: 677},
    {name: "Moradabad", code: 678},
    {name: "Muzaffarnagar", code: 679},
    {name: "Pilibhit", code: 680},
    {name: "Raebareli", code: 681},
    {name: "Pratapgarh", code: 682},
    {name: "Rampur", code: 683},
    {name: "Saharanpur", code: 684},
    {name: "Sambhal", code: 685},
    {name: "Sant Kabir Nagar", code: 686},
    {name: "Bhadohi", code: 687},
    {name: "Shahjahanpur", code: 688},
    {name: "Shamli", code: 689},
    {name: "Shravasti", code: 690},
    {name: "Siddharthnagar", code: 691},
    {name: "Sitapur", code: 692},
    {name: "Sonbhadra", code: 693},
    {name: "Sultanpur", code: 694},
    {name: "Unnao", code: 695},
    {name: "Varanasi", code: 696},
    {name: "Dehradun", code: 697},
    {name: "Pauri Garhwal", code: 698},
    {name: "Chamoli", code: 699},
    {name: "Rudraprayag", code: 700},
    {name: "Tehri Garhwal", code: 701},
    {name: "Haridwar", code: 702},
    {name: "Uttarkashi", code: 703},
    {name: "Almora", code: 704},
    {name: "Udham Singh Nagar", code: 705},
    {name: "Pithoragarh", code: 706},
    {name: "Bageshwar", code: 707},
    {name: "Champawat", code: 708},
    {name: "Nainital", code: 709},
    {name: "Alipurduar District", code: 710},
    {name: "Bankura", code: 711},
    {name: "Basirhat HD (North 24 Parganas)", code: 712},
    {name: "Birbhum", code: 713},
    {name: "Bishnupur HD (Bankura)", code: 714},
    {name: "Cooch Behar", code: 715},
    {name: "Dakshin Dinajpur", code: 716},
    {name: "Darjeeling", code: 717},
    {name: "Diamond Harbor HD (S 24 Parganas)", code: 718},
    {name: "East Bardhaman", code: 719},
    {name: "Hoogly", code: 720},
    {name: "Howrah", code: 721},
    {name: "Jalpaiguri", code: 722},
    {name: "Jhargram", code: 723},
    {name: "Kalimpong", code: 724},
    {name: "Kolkata", code: 725},
    {name: "Malda", code: 726},
    {name: "Murshidabad", code: 727},
    {name: "Nadia", code: 728},
    {name: "Nandigram HD (East Medinipore)", code: 729},
    {name: "North 24 Parganas", code: 730},
    {name: "Paschim Medinipore", code: 731},
    {name: "Purba Medinipore", code: 732},
    {name: "Purulia", code: 733},
    {name: "Rampurhat HD (Birbhum)", code: 734},
    {name: "South 24 Parganas", code: 735},
    {name: "Uttar Dinajpur", code: 736},
    {name: "West Bardhaman", code: 737},
    {name: "Hojai", code: 764},
    {name: "Biswanath", code: 765},
    {name: "Charaideo", code: 766},
    {name: "Majuli", code: 767},
    {name: "South Salmara Mankachar", code: 768},
    {name: "West Karbi Anglong", code: 769},
    {name: "Ahmedabad Corporation", code: 770},
    {name: "Bhavnagar Corporation", code: 771},
    {name: "Gandhinagar Corporation", code: 772},
    {name: "Jamnagar Corporation", code: 773},
    {name: "Junagadh Corporation", code: 774},
    {name: "Rajkot Corporation", code: 775},
    {name: "Surat Corporation", code: 776},
    {name: "Vadodara Corporation", code: 777},
    {name: "Cheyyar", code: 778},
    {name: "Aranthangi", code: 779},
    {name: "Kovilpatti", code: 780},
    {name: "Ranipet", code: 781},
    {name: "COOCHBEHAR", code: 783},
    {name: "Agatti Island", code: 796}
];

var stateObject = {
     AndamanandNicobarIslands: ["Nicobar", "North and Middle Andaman", "South Andaman"],
     AndhraPradesh: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Sri Potti Sriramulu Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR District, Kadapa (Cuddapah)"],
     ArunachalPradesh: ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Itanagar Capital Complex", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang" ],
     Assam: ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup Rural", "Karbi-Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
     Bihar: [ "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
     Chandigarh: ["Chandigarh"],
     Chhattisgarh: [ "Balod", "Baloda bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela Pendra Marwahi",  "Janjgir-Champa", "Jashpur", "Kanker", "Kawardha", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
     DadraandNagarHaveli: ["Dadra and Nagar Haveli"],
     Delhi: [ "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
     Goa: ["North Goa", "South Goa"],
     Gujarat: [ "Ahmedabad", "Ahmedabad Corporation", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Bhavnagar Corporation", "Botad", "Chhotaudepur", "Dahod", "Dang", "Devbhumi Dwaraka", "Gandhinagar", "Gandhinagar Corporation", "Gir Somnath", "Jamnagar", "Jamnagar Corporation", "Junagadh", "Junagadh Corporation", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Rajkot Corporation", "Sabarkantha", "Surat", "Surat Corporation", "Surendranagar", "Tapi", "Vadodara", "Vadodara Corporation", "Valsad"],
     Haryana: [ "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
     HimachalPradesh: [ "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
     JammuandKashmir: [ "Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
     Jharkhand: [ "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
     Karnataka: [ "Bagalkot", "Bangalore Rural", "Bangalore Urban", "BBMP", "Belgaum", "Bellary", "Bidar", "Chamarajanagar", "Chikamagalur", "Chikkaballapur", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttar Kannada", "Vijayapura", "Yadgir"],
     Kerala: ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
     Ladakh: [ "Kargil", "Leh"],
     Lakshadweep: ["Agatti Island", "Lakshadweep"],
     MadhyaPradesh: [ "Agar", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
     Maharashtra: [ "Ahmednagar", "Akola", "Amravati", "Aurangabad",  "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
     Manipur: [ "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
     Meghalaya: [ "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri-Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
     Mizoram: [ "Aizawl East", "Aizawl West", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Serchhip", "Siaha"],
     Nagaland: [ "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
     Odisha: [ "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khurda", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
     Puducherry: [ "Karaikal", "Mahe", "Puducherry", "Yanam"],
     Punjab: [ "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Pathankot", "Patiala", "Rup Nagar", "Sangrur", "SAS Nagar", "SBS Nagar", "Sri Muktsar Sahib", "Tarn Taran"],
     Rajasthan: [ "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur I", "Jaipur II", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
     Sikkim: ["East Sikkim","North Sikki","South Sikki","West Sikkim"],
     TamilNadu: [ "Aranthangi", "Ariyalur", "Attur", "Chengalpet", "Chennai", "Cheyyar", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Kovilpatti", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Palani", "Paramakudi", "Perambalur", "Poonamallee", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Sivakasi", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi (Tuticorin)", "Tiruchirappalli", "Tirunelveli", "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
     Telangana: [ "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal(Rural)", "Warangal(Urban)", "Yadadri Bhuvanagiri"],
     Tripura: [ "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
     UttarPradesh: [ "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Badaun", "Baghpat", "Bahraich", "Balarampur", "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnour", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
     Uttarakhand: [ "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
     WestBengal: [ "Alipurduar District", "Bankura", "Basirhat HD (North 24 Parganas)", "Birbhum", "Bishnupur HD (Bankura)", "Cooch Behar", "COOCHBEHAR", "Dakshin Dinajpur", "Darjeeling", "Diamond Harbor HD (S 24 Parganas)", "East Bardhaman", "Hoogly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "Nandigram HD (East Medinipore)", "North 24 Parganas", "Paschim Medinipore", "Purba Medinipore", "Purulia", "Rampurhat HD (Birbhum)", "South 24 Parganas", "Uttar Dinajpur", "West Bardhaman"],
     DamanandDiu: [ "Daman", "Diu"]
}