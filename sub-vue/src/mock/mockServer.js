import Mock from 'mockjs'
import { floors } from './floors'
Mock.mock('/mock/floors', floors())
