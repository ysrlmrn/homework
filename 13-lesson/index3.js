
function Notification(sender, message) {
  this.sender = sender;
  this.message = message;
  this.sent = false;
}


Notification.prototype.send = function() {
  console.log("send() not implemented");
};

Notification.prototype.log = function() {
  this.send(); 
  this.sent = true;
  console.log(`[LOG] notification from ${this.sender} sent: ${this.sent}\n`);
};


function EmailNotification(sender, message, toEmail) {
  Notification.call(this, sender, message); // Inherit properties
  this.toEmail = toEmail;
}

EmailNotification.prototype = Object.create(Notification.prototype);
EmailNotification.prototype.constructor = EmailNotification;


EmailNotification.prototype.send = function() {
  console.log(`Email to ${this.toEmail}: ${this.message}`);
};


function SMSNotification(sender, message, phone) {
  Notification.call(this, sender, message);
  this.phone = phone;
}
SMSNotification.prototype = Object.create(Notification.prototype);
SMSNotification.prototype.constructor = SMSNotification;


SMSNotification.prototype.send = function() {
  console.log(`SMS to ${this.phone}: ${this.message}`);
};


function PushNotification(sender, message, deviceId) {
  Notification.call(this, sender, message);
  this.deviceId = deviceId;
}
PushNotification.prototype = Object.create(Notification.prototype);
PushNotification.prototype.constructor = PushNotification;


PushNotification.prototype.send = function() {
  console.log(`Push to device ${this.deviceId}: ${this.message}`);
};


const notifications = [
  new EmailNotification("IT Support", "Server reboot scheduled.", "admin@company.com"),
  new SMSNotification("Boss", "Call me ASAP.", "555-0198"),
  new PushNotification("UberApp", "Your driver is arriving soon.", "DEVICE_XYZ_987")
];

console.log("--- Processing Notifications ---\n");


for (let i = 0; i < notifications.length; i++) {
  notifications[i].log();
}


console.log("--- Bonus Results ---");


const sentNotifications = notifications.filter(function(notification) {
  return notification.sent === true;
});


console.log(`Total successfully sent notifications: ${sentNotifications.length}`);