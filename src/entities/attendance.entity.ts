import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  LATE = 'late',
  HALF_DAY = 'half_day',
  EARLY_DEPARTURE = 'early_departure'
}

@Entity('attendance')
export class Attendance extends BaseEntity {
  @ManyToOne(() => User, { nullable: false })
  employee: User;

  @Column({ type: 'datetime' })
  checkInTime: Date;

  @Column({ type: 'datetime', nullable: true })
  checkOutTime: Date;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  checkInLatitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  checkInLongitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  checkOutLatitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  checkOutLongitude: number;

  @Column({
    type: 'varchar',
    length: 20,
    enum: AttendanceStatus,
    default: AttendanceStatus.PRESENT
  })
  status: AttendanceStatus;

  @Column({ type: 'text', nullable: true })
  workingHours: string;

  @Column({ type: 'text', nullable: true })
  overtime: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ default: false })
  isHoliday: boolean;

  @Column({ type: 'simple-json', nullable: true })
  metadata: Record<string, any>;
}