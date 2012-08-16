{
   "geoStoreBase":"http://localhost/geostore/rest/",
   "proxy":"/proxy?url=",
   "watermark_url":"../theme/app/img/nurc-logo.png",
   "watermark_title":"Powered by NURC",
   "watermark_position": "position:absolute;left:690px;top:5px",
   "bounds" : ["17.000","40.0000","16.0000","39.0000"],
   "center" : ["17.5","39.5"],
   "zoom": "8",
   "startTime": "2011-08-16T10:00:00.000Z",
   "endTime": "2011-10-12T10:23:59.000Z",
   "gsSources":{
        "Gliders": {
            "ptype": "gxp_wmssource",
            "title": "Gliders", 
            "version":"1.1.1",
            "url":"http://84.33.199.62/geoserver-gliders/ows"
        },    
        "NURCBG": {
            "title": "Nurc BG",
            "version":"1.1.1",
            "url":"http://demo1.geo-solutions.it/geoserver-enterprise/wfs"
        }
   },
    "layers":[
        {
            "format": "image/jpeg",
            "transparent": false,
            "source": "NURCBG",
            "group": "background",
            "name": "nurcbg",
            "title": "Nurc Background"
        },
        {
            "format": "image/png8",
            "group": "Watervel",
            "name": "it.geosolutions:Rep11b_watervel_forecast",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Watervel Forecast",
            "transparent": true,
            "visibility": true,
            "ratio": 1
        },
         {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersErrorEllipseEnvelopes",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Envelope",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe'"
        },
         {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersErrorEllipses",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Error Ellipses",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe'"
        },
                 {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPredictedTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Predicted Track",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
             "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe'"
         },
         {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersErrorEllipseCenters",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Error Centers",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPredictedCurrent",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Current Predicted",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe'"
        },
        {
            "format": "image/png",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe' AND type = 'OldTracks'"
        },
     
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'zoe' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Noa",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'noa'"
        },
        {
            "format": "image/png8",
            "group": "Noa",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'noa' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Noa",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'noa' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Noa",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'noa' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Noa",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'noa' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Noa",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'noa' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'natalie'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'natalie' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'natalie' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'natalie' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'natalie' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'natalie' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'elettra'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'elettra' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'elettra' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'elettra' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'elettra' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep11b' AND glider_name = 'elettra' AND type = 'Points'"
        }
    ]
}

