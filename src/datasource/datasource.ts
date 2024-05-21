import {DataSource} from 'typeorm'
import { User } from '../entities/User.entity';
const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',  
  port: 3306, 
  database: 'TypeormTutorial',
  username: 'root',
  password: 'Ydurga232bhavani@',
  logging: true,
  synchronize: false,
  entities:[User],
})

export default dataSource;