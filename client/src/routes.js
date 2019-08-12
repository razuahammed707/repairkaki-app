import PartnerRequest from "./pages/partner/requests";
import PartnerQuotation from "./pages/partner/submitted";
import PartnerAppointment from "./pages/partner/appointment";

const PartnerRoutes=[
    {
        path:"/request",
        name:"Requests",
        component:PartnerRequest,
        layout:"/partner"
    },
    {
        path:"/quotations",
        name:"Submitted Quotations",
        component:PartnerQuotation,
        layout:"/partner"
    },
    {
        path:"/appointment",
        name:"Appointment",
        component:PartnerAppointment,
        layout:"/partner"
    }
];

export default PartnerRoutes;
