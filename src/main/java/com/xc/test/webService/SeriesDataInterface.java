package com.xc.test.webService;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService 
public interface SeriesDataInterface {

	@WebMethod
	String getBoolenTypeSensorData();
	
	@WebMethod
	String getPicTypeSensorData();
	
	@WebMethod
	String getValueTypeSensorData();
	
	@WebMethod
	String getImageTypeSensorData();

}
