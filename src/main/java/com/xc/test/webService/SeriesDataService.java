package com.xc.test.webService;

import javax.jws.WebService;

@WebService (endpointInterface="com.xc.test.webService.SeriesDataInterface",serviceName="seriesDataService")
public class SeriesDataService implements SeriesDataInterface{

	@Override
	public String getBoolenTypeSensorData() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPicTypeSensorData() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getValueTypeSensorData() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getImageTypeSensorData() {
		// TODO Auto-generated method stub
		return null;
	}

}
