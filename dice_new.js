var model = {
	"jani-version": 1,
	"name": "dice",
	"type" : "dtmc",
	"actions" : [{"name": "act"}],
	"variables" : [
		{
			"name": "thrownSix",
			"type": "bool",
			"initial-value": false
		},
		{
			"name": "terminated",
			"type": "bool",
			"initial-value": false
		},
		{
		  "name": "testvar1",
		  "type": {
		    "kind": "bounded",
		    "base": "real",
		    "lower-bound": 1,
		    "upper-bound": 2
		  },
		  "initial-value": 1.5
		}
	],
	"rewards" : [
		{
			"name" : "step"
		}
	],
	"properties" : [
		{
			"name" : "ProbThrowSix",
			"reach" : "thrownSix",
			"type": "probability-max-query"
		},
		{
			"name" : "StepsUntilReach",
			"reach" : "terminated",
			"reward": "step",
			"type": "expected-reachability-reward-max-query"
		}
	],
	"automata" : [
		{
			"name" : "dice",
			"variables" : [
				{
					"name" : "d",
					"type" : {
						"kind": "bounded",
						"base": "int",
						"lower-bound" : 0,
						"upper-bound" : 6
					},
					"initial-value" : 0
				}
			],
			"locations" : [
				{
					"name" : "s0"
				},
				{
					"name" : "s1"
				},
				{
					"name" : "s2"
				},
				{
					"name" : "s3"
				},
				{
					"name" : "s4"
				},
				{
					"name" : "s5"
				},
				{
					"name" : "s6"
				},
				{
					"name" : "s7"
				}
			],
			"initial-location" : "s0",
			"edges" : [
				{
					"location" : "s0",
					"action": "act",
					"guard" : {
					  "op": "and",
					  "args": [
					    true,
					    {
					      "op": "or",
					      "args": [false, false]
					    }					      
					  ]
					},
					"destinations" : [
						{
							"probability" : {
							  "op": "+",
							  "args": [0.5, "x"]
							},
							"location" : "s1",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						},
						{
							"probability" : 0.5,
							"location" : "s2",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				},
				{
					"location" : "s1",
					"guard" : true,
					"destinations" : [
						{
							"probability" : 0.5,
							"location" : "s3",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						},
						{
							"probability" : 0.5,
							"location" : "s4",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				},
				{
					"location" : "s2",
					"guard" : true,
					"destinations" : [
						{
							"probability" : 0.5,
							"location" : "s5",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						},
												{
							"probability" : 0.5,
							"location" : "s6",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				},
				{
					"location" : "s3",
					"guard" : true,
					"destinations" : [
						{
							"probability" : 0.5,
							"location" : "s1",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						},
						{
							"probability" : 0.5,
							"location" : "s7",
							"assignments" : [
								{
									"ref" : "d",
									"value" : 1
								},
								{
									"ref" : "terminated",
									"value" : true
								}
							],
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				},
				{
					"location" : "s4",
					"guard" : true,
					"destinations" : [
						{
							"probability" : 0.5,
							"location" : "s7",
							"assignments" : [
								{
									"ref" : "d",
									"value" : 2
								},
								{
									"ref" : "terminated",
									"value" : true
								}
							],
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						},
						{
							"probability" : 0.5,
							"location" : "s7",
							"assignments" : [
								{
									"ref" : "d",
									"value" : 3
								},
								{
									"ref" : "terminated",
									"value" : true
								}
							],
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				},
				{
					"location" : "s5",
					"guard" : true,
					"destinations" : [
						{
							"probability" : 0.5,
							"location" : "s7",
							"assignments" : [
								{
									"ref" : "d",
									"value" : 4
								},
								{
									"ref" : "terminated",
									"value" : true
								}
							],
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						},
						{
							"probability" : 0.5,
							"location" : "s7",
							"assignments" : [
								{
									"ref" : "d",
									"value" : 5
								},
								{
									"ref" : "terminated",
									"value" : true
								}
							],
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				},
				{
					"location" : "s6",
					"guard" : true,
					"destinations" : [
						{
							"probability" : 0.5,
							"location" : "s2",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						},
						{
							"probability" : 0.5,
							"location" : "s7",
							"assignments" : [
								{
									"ref" : "d",
									"value" : 6
								},
								{
									"ref" : "thrownSix",
									"value" : true
								},
								{
									"ref" : "terminated",
									"value" : true
								}
							],
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				},
				{
					"location" : "s7",
					"guard" : true,
					"destinations" : [
						{
							"probability" : 1,
							"location" : "s7",
							"rewards" : [
								{
									"ref" : "step",
									"value" : 1
								}
							]
						}
					]
				}
				
			]
		}
	],
	"system" : {
	  "composition": "rename",
	  "element": "dice",
	  "map": [
	    {
	      "from": "act"
	    }
	  ]
	}
};
