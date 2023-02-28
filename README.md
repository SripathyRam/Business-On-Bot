# Business-On-Bot
Nodejs application to interact with the API query parameters 

Backend to fetch bank details:

AIM:
	To create a REST service that can fetch bank details, using the data given in the API’s query parameters. You can use the data available in this Link in your backend DB

Working:



Case 1:
	Return possible matches based on the city = Mumbai ordered by IFSC code (ascending order) with limit and offset.

Link / URL - http://localhost:4000/search?q=Mumbai&limit=2&offset=1

HTTP Response

[
    {
        "ifsc": "ABHY0065002",
        "bank_id": "60",
        "branch": "ABHYUDAYA NAGAR",
        "address": "ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA",
        "bank_name": "ABHYUDAYA COOPERATIVE BANK LIMITED"
    },
    {
        "ifsc": "ABHY0065003",
        "bank_id": "60",
        "branch": "BAIL BAZAR",
        "address": "KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA",
        "bank_name": "ABHYUDAYA COOPERATIVE BANK LIMITED"
    }
]


Case 2:

	Return possible matches based on the branch = LONI, ordered by IFSC code (descending order) with limit and offset.

Link / URL - http://localhost:4000/Branch?branch=LONI&limit=1&offset=1

HTTP Response

[
    {
        "ifsc": "ZSBL0000331",
        "bank_id": "101",
        "branch": "RAVALI KALA",
        "address": "VILL.RAVLIKALA,MURAD NAGAR",
        "city": "RAVLI",
        "district": "GHAZIABAD",
        "state": "UTTAR PRADESH",
        "bank_name": "ZILA SAHAKRI BANK LIMITED GHAZIABAD"
    }
]
