/**
 * a container for information describing the user logged into the application.
 */
 export interface UserDetails {

    // TODO: check this documentation against the documentation of the customization service
    
    /** 
     * the user name that the user used to log in with at the authentication service
     */
    userId : string,

    /**
     * the user's given name
     */
    userName ?: string,

    /** 
     * the user's family name
     */
    userLastName ?: string,

    /**
     * the user's email address
     */
    userEmail ?: string,


/**
     * the user's email address
     */
    userGroup?: string,

    userDiv?: string,
    
    userDivNum?: string,

    userOU?: string


//     userId: "dsn1",
// userName: "Deoyani",
// userLastName: "Nandrekar Heinis",
// userEmail: "deoyani.nandrekarheinis@nist.gov",
// userGroup: "Domain Users",
// userDiv: "Office of Data and Informatics",
// userDivNum: "641",
// userOU: "Material Measurement Laboratory"
}


/**
 * a container for information describing the update detail info.
 */
export interface UpdateDetails {

    // TODO: check this documentation against the documentation of the customization service
    
    /**
     * User info who made the update
     */
    userDetails: UserDetails;

    /**
     * Update date
     */
    _updateDate: string;
}