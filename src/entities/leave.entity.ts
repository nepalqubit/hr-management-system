import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

export enum LeaveType {
  PAID = 'paid',
  UNPAID = 'unpaid',
  SICK = 'sick',
  HOLIDAY = 'holiday',
  OTHER = 'other'
}

export enum LeaveStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled'
}

@Entity('leaves')
export class Leave extends BaseEntity {
  @ManyToOne(() => User, { nullable: false })
  employee: User;

  @ManyToOne(() => User, { nullable: true })
  approver: User;

  @Column({
    type: 'varchar',
    length: 20,
    enum: LeaveType,
    default: LeaveType.PAID
  })
  type: LeaveType;

  @Column({
    type: 'varchar',
    length: 20,
    enum: LeaveStatus,
    default: LeaveStatus.PENDING
  })
  status: LeaveStatus;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @Column({ type: 'text' })
  duration: string;

  @Column({ type: 'text' })
  reason: string;

  @Column({ type: 'text', nullable: true })
  rejectionReason: string;

  @Column({ type: 'simple-json', nullable: true })
  attachments: string[];

  @Column({ type: 'boolean', default: false })
  isEmergency: boolean;

  @Column({ type: 'simple-json', nullable: true })
  metadata: Record<string, any>;
}