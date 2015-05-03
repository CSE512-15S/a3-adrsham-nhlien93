import json

with open('data/part.json') as data_file:    
    parts = json.load(data_file)

map = dict()

for info in parts:
	city = info["properties"]["city"].replace(" (part)", "")
	if city in map:
		map[city]["properties"]["county"] = map[city]["properties"]["county"] + " / " + info["properties"]["county"] 
		# sum up the populations
		for x in range(1990, 2015):
			if map[city]["properties"]["pop_" + str(x)] is None:
				map[city]["properties"]["pop_" + str(x)] = 0
			if info["properties"]["pop_" + str(x)]:
				map[city]["properties"]["pop_" + str(x)] = map[city]["properties"]["pop_" + str(x)] + info["properties"]["pop_" + str(x)]
	else:
		info["properties"]["city"] = city
		map[city] = info

liststr = str(map.values());
liststr = liststr.replace("\'", "\"")
with open('data/partsFinal.json', 'w') as outfile:
    outfile.write(liststr)