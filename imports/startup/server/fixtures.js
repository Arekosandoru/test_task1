import { Meteor } from "meteor/meteor";
import { Projects } from "../../api/projects/projects.js";
import { Users } from "../../api/users/users.js";

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
    // add project
    if (Projects.find().count() === 0) {
        var project = {
            siteURL: "https://v2.buildateam.io",
            skills: "Design and development",
            client: {
                name: "Lex Mustafin",
                phoneNumber: "+134 728 657 49",
                location: "SF, CA, UNITED STATES",
                timezone: "GTM-8"
            },
            production: {
                url: "https://www.google.com/",
				adminPanelUrl: "https://www.admin/google.com/",
				login: "Admin_person",
				password: "123456"
            },
            googleDriveUrl: "https://www.google.com/",
            description:
                "Lorem ipsum psum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia, sem in elementum facilisis, elit augue congue orci, et efficitur purus  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia, sem in elementum facilisis, elit augue congue orci, et efficitur purus  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia, sem in elementum facilisis, elit augue congue orci, et efficitur purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia, sem in elementum facilisis, elit augue congue orci, et efficitur purus  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia, sem in elementum facilisis, elit augue congue orci, et efficitur purus  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia, sem in elementum facilisis, elit augue congue orci, et efficitur purus",
			deadline: new Date(),
			createdAt: new Date(),
        };

        Projects.insert(project);
    }

    // add users
    if (Users.find().count() === 0) {
        const usersData = [
            {
                name: "Elnora",
                trigger: true,
                image: "https://randomuser.me/api/portraits/med/women/1.jpg",
                createdAt: new Date(),
                role: 'Designer',
                rate: 10
            },
            {
                name: "Damian",
                trigger: false,
                image: "https://randomuser.me/api/portraits/med/men/1.jpg",
                createdAt: new Date(),
                role: 'PHP Coder',
                rate: 12
            },
            {
                name: "Lora",
                trigger: false,
                image: "https://randomuser.me/api/portraits/med/women/2.jpg",
                createdAt: new Date(),
                role: 'SMM',
                rate: 14
            },
            {
                name: "Carla",
                trigger: false,
                image: "https://randomuser.me/api/portraits/med/women/3.jpg",
                createdAt: new Date(),
                role: 'SEO',
                rate: 16
            },
            {
                name: "Greg",
                trigger: false,
                image: "https://randomuser.me/api/portraits/med/men/2.jpg",
                createdAt: new Date(),
                role: 'Designer',
                rate: 18
            }
        ];
        
        usersData.forEach((user) => {
            Users.insert(user);
        });
    }
    
});
