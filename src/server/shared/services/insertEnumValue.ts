import { fetchEnumValues } from './fetchEnumValues';
import { Knex } from '../../database/knex';

export async function insertEnum(tableName: string) {
	const EnumValue = await fetchEnumValues(Knex, tableName);
	return EnumValue;
}

