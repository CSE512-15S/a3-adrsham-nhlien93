import urllib.request
import json

final = [];
url = "https://maps.googleapis.com/maps/api/geocode/json?address= &components=state:WA&key=AIzaSyAzh9r7tTPOjxayB8nYrwUi4TYbzMSXW9w"

with open('data/citypops.json') as data_file:    
    notWorking = json.load(data_file)

# keeps looping until all the cities work
while len(notWorking) != 0:
	print ("new loop, " + str(len(notWorking)) + " left")
	notWorkingOther = notWorking
	notWorking = [];
	for info in notWorkingOther:
		city = info["city"].replace(" (part)", "").replace(" ", "+")
		county = info["county"].replace(" (part)", "").replace(" ", "+")
		combine = city + ",+" + county
		temp_url = url.replace(" ", combine)
		try:
			with urllib.request.urlopen(temp_url) as response:
				jsonret = response.read().decode("utf-8")
				jsonret = "".join(jsonret.split())

				jsonparsed = json.loads(jsonret)
				lat = jsonparsed["results"][0]["geometry"]["location"]["lat"]
				long = jsonparsed["results"][0]["geometry"]["location"]["lng"]

				y = round(((lat - 45.5485987) * (5725.0 - 5070.0) / (49.0024305 - 45.5485987)) + 5070.0)
				x = round(((long + 124.7857167) * (1734.0 - 1513.0) / (124.7857167 - 116.91558)) + 1513.0)

				map = {"coordinates": [x, y], "properties": info, "type": "Point"};
				final.append(map);
		except:
			notWorking.append(info)

with open('data/finalpops2.json', 'w') as outfile:
    json.dump(final, outfile)