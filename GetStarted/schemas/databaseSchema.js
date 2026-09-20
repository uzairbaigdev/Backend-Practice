const userSchema = {
	$jsonSchema: {
		bsonType: 'object',
		required: ['username'],
		additionalProperties: false,
		properties: {
			_id: { bsonType: 'objectId' },
			username: { bsonType: 'string' },
		},
	},
}

export async function ensureDatabaseSchema(database) {
	const collectionName = 'Users'
	const exists = await database
		.listCollections({ name: collectionName }, { nameOnly: true })
		.hasNext()

	if (exists) {
		await database.command({
			collMod: collectionName,
			validator: userSchema,
			validationLevel: 'strict',
			validationAction: 'error',
		})
	} else {
		await database.createCollection(collectionName, {
			validator: userSchema,
			validationLevel: 'strict',
			validationAction: 'error',
		})
	}
}
