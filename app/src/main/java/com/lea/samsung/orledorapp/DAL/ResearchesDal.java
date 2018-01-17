package com.lea.samsung.orledorapp.DAL;

import com.firebase.client.DataSnapshot;
import com.firebase.client.Firebase;
import com.firebase.client.FirebaseError;
import com.firebase.client.ValueEventListener;
import com.lea.samsung.orledorapp.Inerfaces.IResearchesAction;
import com.lea.samsung.orledorapp.Logger.Logger;
import com.lea.samsung.orledorapp.Models.Researches;

/**
 * Created by USER on 17/1/2018.
 */
public class ResearchesDal extends BaseDal {
    private Firebase _researchesCollection = super.DB.child("researches");

   /* public void GetResearches(final String researchesName) //, final String password, final ILoginAction loginAction)
    {
        _researchesCollection.orderByChild(researchesName).addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot researchesSnapshot : dataSnapshot.getChildren()) {
                    Research tempResearch = researchesSnapshot.getValue(Research.class);

                    if (tempResearch.get_researchName().equals(researchName))/* &&
                        tempResearch.get_password().equals(password))*/
                  /*  {
                        loginAction.ResearchLoggedIn(tempResearch);
                        return;
                    }
                }
                loginAction.ResearchNotFound();
            }

        });
    }*/

    public boolean SaveResearch(Research research) {
        String researchName = research.get_researchName();
        if(researchName == null || researchName.isEmpty())
        {
            return false;
        }

        try {
            _researchesCollection.child(researchName).setValue(research);
            return true;
        }
        catch (Exception ex) {
            Logger.LogErrorWithException("Failed to save research", ex);
            return false;
        }
    }
}
