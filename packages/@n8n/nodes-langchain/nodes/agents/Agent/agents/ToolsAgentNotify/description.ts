import type { INodeProperties } from 'n8n-workflow';

import { SYSTEM_MESSAGE } from './prompt';

export const toolsAgentNotifyProperties: INodeProperties[] = [
	{
		displayName: 'Notification URL',
		name: 'notificationUrl',
		type: 'string',
		default: 'http://127.0.0.1:8000',
		description: 'Server URL to send notifications to',
		displayOptions: {
			show: {
				agent: ['toolsAgentNotify'],
			},
		},
	},
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		default: '',
		description: 'The session ID to include in the notification',
		displayOptions: {
			show: {
				agent: ['toolsAgentNotify'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		description: 'The message ID to include in the notification',
		displayOptions: {
			show: {
				agent: ['toolsAgentNotify'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		displayOptions: {
			show: {
				agent: ['toolsAgentNotify'],
			},
		},
		default: {},
		placeholder: 'Add Option',
		options: [
			{
				displayName: 'System Message',
				name: 'systemMessage',
				type: 'string',
				default: SYSTEM_MESSAGE,
				description: 'The message that will be sent to the agent before the conversation starts',
				typeOptions: {
					rows: 6,
				},
			},
			{
				displayName: 'First LLM Notification Message',
				name: 'firstLLMNotificationMessage',
				type: 'string',
				default: 'start calling LLM',
				description: 'The message that will be sent to the client at the start of agent work',
				typeOptions: {
					rows: 1,
				},
			},
			{
				displayName: 'Tool Notification Message',
				name: 'toolNotificationMessage',
				type: 'string',
				default: 'calling {{name}} tool',
				description:
					'The message that will be sent to the client on each tool invocation. Use {{name}} to insert the tool name',
				typeOptions: {
					rows: 1,
				},
			},
			{
				displayName: 'LLM Notification Message',
				name: 'llmNotificationMessage',
				type: 'string',
				default: 'calling LLM',
				description: 'The message that will be sent to the client on each LLM invocation',
				typeOptions: {
					rows: 1,
				},
			},
			{
				displayName: 'Max Iterations',
				name: 'maxIterations',
				type: 'number',
				default: 10,
				description: 'The maximum number of iterations the agent will run before stopping',
			},
			{
				displayName: 'Return Intermediate Steps',
				name: 'returnIntermediateSteps',
				type: 'boolean',
				default: false,
				description: 'Whether or not the output should include intermediate steps the agent took',
			},
			{
				displayName: 'Automatically Passthrough Binary Images',
				name: 'passthroughBinaryImages',
				type: 'boolean',
				default: true,
				description:
					'Whether or not binary images should be automatically passed through to the agent as image type messages',
			},
		],
	},
];
