# o-rest-api-generate-a-new-api-endpoint-inside-your-project v0.0.0



- [Productos](#productos)
	- [Create productos](#create-productos)
	- [Delete productos](#delete-productos)
	- [Retrieve productos](#retrieve-productos)
	- [Update productos](#update-productos)
	


# Productos

## Create productos



	POST /productos


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| descripcion			| 			|  <p>Productos's descripcion.</p>							|
| precio			| 			|  <p>Productos's precio.</p>							|

## Delete productos



	DELETE /productos/:id


## Retrieve productos



	GET /productos


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update productos



	PUT /productos/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| descripcion			| 			|  <p>Productos's descripcion.</p>							|
| precio			| 			|  <p>Productos's precio.</p>							|


