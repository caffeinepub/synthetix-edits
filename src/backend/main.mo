import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  let contacts = Map.empty<Principal, Contact>();

  type Contact = {
    name : Text;
    company : Text;
    projectBrief : Text;
    email : Text;
  };

  module Contact {
    public func compare(contact1 : Contact, contact2 : Contact) : Order.Order {
      Text.compare(contact1.name, contact2.name);
    };

    public func compareByCompany(contact1 : Contact, contact2 : Contact) : Order.Order {
      Text.compare(contact1.company, contact2.company);
    };
  };

  public shared ({ caller }) func submitContact(contact : Contact) : async () {
    if (contacts.containsKey(caller)) {
      Runtime.trap("Contact already submitted with this principal.");
    };
    contacts.add(caller, contact);
  };

  public query func getAllContacts() : async [Contact] {
    contacts.values().toArray().sort();
  };

  public query func getAllContactsByCompany() : async [Contact] {
    contacts.values().toArray().sort(Contact.compareByCompany);
  };

  public query ({ caller }) func isContactSubmitted() : async Bool {
    contacts.containsKey(caller);
  };

  public query func getContact(user : Principal) : async Contact {
    switch (contacts.get(user)) {
      case (null) { Runtime.trap("Contact not found.") };
      case (?contact) { contact };
    };
  };
};
