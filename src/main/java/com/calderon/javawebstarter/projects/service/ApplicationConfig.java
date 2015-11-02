/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.calderon.javawebstarter.projects.service;

import javax.ws.rs.core.Application;
import java.util.Set;

/**
 *
 * @author francisco
 */
@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(com.calderon.javawebstarter.projects.service.ProjectFacadeREST.class);
        resources.add(com.calderon.javawebstarter.projects.service.UserProjectFacadeREST.class);
        resources.add(com.calderon.javawebstarter.projects.service.UsersFacadeREST.class);
        resources.add(com.calderon.javawebstarter.projects.service.SecurityFacadeREST.class);
    }
    
}
