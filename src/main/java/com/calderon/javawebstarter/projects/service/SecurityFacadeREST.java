package com.calderon.javawebstarter.projects.service;

import javax.annotation.security.RolesAllowed;
import javax.ejb.Stateless;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

/**
 * SecurityFacadeREST REST Service
 *
 * @author Francisco Calderon
 * @since 11/2/15.
 */
@Stateless
@Path("security")
public class SecurityFacadeREST {
    @GET
    @Produces({"appplication/json"})
    @RolesAllowed({"ROLE_USER", "ROLE_ADMIN"})
    @Path("logout")
    public String logout(@Context HttpServletRequest request){
        request.getSession().invalidate();
        return "{ \"message\" : \"Logged out successfully\"}";
    }
}
