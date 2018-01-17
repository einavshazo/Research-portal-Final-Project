package com.lea.samsung.orledorapp.Common;

import com.lea.samsung.orledorapp.Models.Researches;

/**
 * Created by USER on 17/1/2018.
 */
public class ResearchContext {
    public static Research LoggedResearch;

    public static Research getLoggedResearch() {
        return LoggedResearch;
    }

    public static void setLoggedResearch(Research loggedResearch) {
        LoggedResearch = loggedResearch;
    }
}
