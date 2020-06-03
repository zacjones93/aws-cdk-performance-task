"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const apiGateway = require("@aws-cdk/aws-apigateway");
const backend_1 = require("./backend");
class EmailCaputureFormStack extends cdk.Stack {
    /**
     * @param {cdk.App} scope
     * @param {string} id
     * @param {cdk.StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        const backend = new backend_1.Backend(this, "Backend");
        new apiGateway.LambdaRestApi(this, "Endpoint", {
            handler: backend.handler
        });
    }
}
module.exports = { EmailCaputureFormStack };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY2FwdXR1cmUtZm9ybS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtYWlsLWNhcHV0dXJlLWZvcm0tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFFckMsc0RBQXNEO0FBQ3RELHVDQUFtQztBQUVuQyxNQUFNLHNCQUF1QixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzVDOzs7O09BSUc7SUFDSCxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsNkNBQTZDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFN0MsSUFBSSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDN0MsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSBcIkBhd3MtY2RrL2F3cy1sYW1iZGFcIjtcbmltcG9ydCAqIGFzIGFwaUdhdGV3YXkgZnJvbSBcIkBhd3MtY2RrL2F3cy1hcGlnYXRld2F5XCI7XG5pbXBvcnQgeyBCYWNrZW5kIH0gZnJvbSBcIi4vYmFja2VuZFwiXG5cbmNsYXNzIEVtYWlsQ2FwdXR1cmVGb3JtU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICAvKipcbiAgICogQHBhcmFtIHtjZGsuQXBwfSBzY29wZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQHBhcmFtIHtjZGsuU3RhY2tQcm9wcz19IHByb3BzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gVGhlIGNvZGUgdGhhdCBkZWZpbmVzIHlvdXIgc3RhY2sgZ29lcyBoZXJlXG4gICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKHRoaXMsIFwiQmFja2VuZFwiKTtcblxuICAgIG5ldyBhcGlHYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgXCJFbmRwb2ludFwiLCB7XG4gICAgICBoYW5kbGVyOiBiYWNrZW5kLmhhbmRsZXJcbiAgICB9KVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFbWFpbENhcHV0dXJlRm9ybVN0YWNrIH1cbiJdfQ==