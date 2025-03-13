// TODO: change registration link; committe list; partners; program

const edition = "14th";
const year = 2025;
const month = "September";
const days = "08-09";
const place = "Catania, Italy";
const registrationLink = "to be communicated";
const uploadPapersLink = "https://easychair.org/my/conference?conf=fois2025"
const JOWOlink = "http://iaoa.org/jowo/";

const importantDates = 
'<li> Paper submission deadline: <strike></strike> 25 May 2025 </li>\n' +
'<li> Notification of acceptance: <strike></strike> 14 July 2025 </li>\n' +
'<li> Author registration: to be communicated </li>\n' +
'<li> Camera-ready submission: 01 September 2025 </li>\n'+
'<li> JOWO workshop days co-located with FOIS 2025 (exact FOMI date TBD): 08-09 September 2025 </li>\n'


const events = [ // Array of date and text pairs
    // { date: "July 2, 2021", text: "The deadline for submission of papers for FOMI2021 has been extend until 9. July 2021." },
    // { date: "May 27, 2021", text: "We partnered with the Industrial Ontologies Foundry (IOF) to join efforts and present its current activities as part of the FOMI 2021 workshop." },
    // { date: "May 27, 2021", text: "We partnered with the OntoCommons project to join efforts and present a special session on OntoCommons activities as part of the FOMI 2021 workshop." },
    // { date: "Gen 15, 2024", text: "FOMI 2024 web site is public." },
    // { date: "Feb 02, 2024", text: "Updated call dates." },
    // { date: "Jun 27, 2024", text: "Program online." },
    // { date: "Jul 16, 2024", text: "FOMI workshop." },
];
const organizers = [
    { name: "João Luiz Rebelo Moreira", email: "j.luizrebelomoreira@utwente.nl" },
    { name: "Walter Terkaj", email: "walter.terkaj@stiima.cnr.it" },
]
const committeeList = 

'<li>...</li>' +
'<li>...</li>' +
'<li>...</li>'

function createTable() {
    var tableHTML = '';

    events.forEach(function (event) {
        tableHTML += '<tr><td>' + event.date + '</td><td>' + event.text + '</td></tr>';
    });

    return tableHTML;
}
function createOrganizersList() {
    var list = '';

    organizers.forEach(function (organizer) {
        list += '<li>' + organizer.name + '</li><ul><li> Email: <a href="mailto:' + organizer.email + '">'+organizer.email+'</a></ul>';
    });

    return list;
}

function pprint(variable) { // wrapper for the deprecated document.write
    document.write(variable);
} 

const newsTable = createTable();
const organizersList = createOrganizersList();
const date = days + " "+ month + " " + year;
const title = edition + " International Workshop on Formal Ontologies meet Industry";
